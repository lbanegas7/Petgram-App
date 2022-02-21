import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id: ID!){
    photo(id: $id){
            id
            categoryId
            src
            likes
            userId
            liked
        }
}    
`
export const PhotoCardWithQuery = () => {
  const { detailId } = useParams()
  // console.log(detailId)
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: { id: detailId } })
  const photo = data?.photo

  if (error) {
    return <h2>Internal Server Error</h2>
  }

  return (
    loading ? <p>Cargando imagen...</p> : <PhotoCard {...photo} />
  )
}
