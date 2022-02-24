import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListOfFavs } from '../ListOfFavs'

const GET_FAVS = gql`
    query getFavs{
        favs{
            id
            categoryId
            src
            likes
            userId
        }
    }
`

export const FavsWithQuery = () => {
  const { error, loading, data } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' })

  if (error) return <h2>Internal Server Error</h2>

  return loading ? 'Cargando favoritos...' : <ListOfFavs favs={data?.favs} />
}
