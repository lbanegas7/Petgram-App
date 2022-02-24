import reactDOM from 'react-dom'
import React from 'react'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client'
import { AppProvider } from './Context'
import { onError } from '@apollo/client/link/error'

const httpLink = new HttpLink({ uri: 'https://petgram-server-luis-b.vercel.app/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }))
  return forward(operation)
})
const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    console.log(14)
    window.sessionStorage.removeItem('token')
    window.location.href = '/'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    httpLink
  ])
  // link: errorLink.concat(authMiddleware.concat(httpLink))
})
// const client = new ApolloClient({
//   uri: 'https://petgram-server-luis-b.vercel.app/graphql',
//   cache: new InMemoryCache()
// })
reactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById('app'))
