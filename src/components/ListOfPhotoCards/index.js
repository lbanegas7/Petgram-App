import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { withPhotos } from '../../hoc/withPhotos'

export const ListPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = withPhotos(categoryId)

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
