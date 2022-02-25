
import React, { useContext, Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Detail } from './pages/Detail'
import { Home } from './pages/home'
import { User } from './pages/User'
// import { Favs } from './pages/Favs'
import { GlobalStyle } from './styles/GlobalStyle'
import { NotRegistedUser } from './pages/NotRegisteDUser'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
          <Route path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
          <Route path='/login' element={isAuth ? <Navigate replace to='/' /> : <NotRegistedUser />} />
          <Route exact path='/login' element={!isAuth ? <NotRegistedUser /> : <Navigate replace to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  )
}
