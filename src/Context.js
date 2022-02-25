import React, { createContext, useState } from 'react'

const Context = createContext(null)
const AppProvider = ({ children }) => {
  // Estado se la sesion del usuario
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: (token) => {
      // console.log(token, 2)
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return (<Context.Provider value={value}>{children} </Context.Provider>)
}

export {
  AppProvider,
  Context
}
