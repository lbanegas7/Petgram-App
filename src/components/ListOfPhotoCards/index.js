import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'

const withPhotos = gql`
  query getPhotos{
    photos{
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListPhotoCards = () => {
  const { loading, error, data } = useQuery(withPhotos)

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  const Cards = () => (<ul>{data?.photos.map(photo => <li key={photo.id}><PhotoCard key={photo.id} {...photo} /></li>)}</ul>)
  return (
    <>
      {loading ? <p>Cargando imagenes...</p> : Cards()}
    </>
  )
}
