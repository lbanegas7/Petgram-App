import React, { createContext, useState } from 'react'

const Context = createContext(null)

const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    }
  }

  return (<Context.Provider value={value}>{children} </Context.Provider>)
}

// export default {
//   AppProvider,
//   Consumer: Context.Consumer
// }

export {
  AppProvider,
  Context
}
