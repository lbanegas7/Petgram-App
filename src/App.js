
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Detail } from './pages/Detail'
import { Home } from './pages/home'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { GlobalStyle } from './styles/GlobalStyle'
import { NotRegistedUser } from './pages/NotRegisteDUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        {/* <Route path='/user' element={<User />} />
        <Route path='/favs' element={<Favs />} />
        <Route path='/user' element={<NotRegistedUser />} />
        <Route path='/favs' element={<NotRegistedUser />} /> */}
      </Routes>
      <UserLogged>
        {
          ({ isAuth }) => isAuth ? <Routes><Route path='/user' element={<User />} /><Route path='/favs' element={<Favs />} /></Routes>
            : <Routes><Route path='/user' element={<NotRegistedUser />} /><Route path='/favs' element={<NotRegistedUser />} /></Routes>
        }
      </UserLogged>
      <NavBar />
    </BrowserRouter>
  )
}
