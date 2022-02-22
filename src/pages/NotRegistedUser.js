import React, { useContext } from 'react'
import { Context } from '../Context'

export const NotRegistedUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <form onSubmit={activateAuth}>
        <button>Iniciar sesion</button>
      </form>
    </>
  )
}
