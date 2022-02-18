
import React from 'react'
import { PhotoCardWithQuery } from './components/Container/PhotoCardWithQuery'
import { ListOfCategories } from './components/ListOfCategories'
import { ListPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  const components = () => (
    <>
      <Logo />
      <ListOfCategories />
      <ListPhotoCards categoryId={1} />
    </>)
  return (
    <>
      <GlobalStyle />
      {detailId ? <PhotoCardWithQuery Id={detailId} /> : components()}

    </>
  )
}
