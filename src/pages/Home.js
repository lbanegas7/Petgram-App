import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListPhotoCards } from '../components/ListOfPhotoCards'

export const Home = () => {
  const { id } = useParams()
  return (
    <>
      <ListOfCategories />
      <ListPhotoCards categoryId={id} />
    </>
  )
}
