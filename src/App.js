
import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListPhotoCards />
    </>
  )
}
