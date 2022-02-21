
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logo } from './components/Logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/home'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>

    </BrowserRouter>
  )
}
