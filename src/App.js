
import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Detail } from './pages/Detail'
import { Home } from './pages/home'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { GlobalStyle } from './styles/GlobalStyle'
import { NotRegistedUser } from './pages/NotRegisteDUser'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/user' element={isAuth ? <User /> : <NotRegistedUser />} />
        <Route path='/favs' element={isAuth ? <Favs /> : <NotRegistedUser />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}
