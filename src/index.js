import reactDOM from 'react-dom'
import React from 'react'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppProvider } from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-luis-b.vercel.app/graphql',
  cache: new InMemoryCache()
})
reactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById('app'))
