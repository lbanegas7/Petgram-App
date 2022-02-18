import reactDOM from 'react-dom'
import React from 'react'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://petgram-server-luis-b.vercel.app/graphql',
  cache: new InMemoryCache()
})
reactDOM.render(<ApolloProvider client={client}> <App /> </ApolloProvider>, document.getElementById('app'))
