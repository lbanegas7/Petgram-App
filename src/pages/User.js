import React, { useContext } from 'react'
import { SubmitButton } from '../components/SubmitButton'
import { Context } from '../Context'

export default () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h3>User</h3>
      <SubmitButton title='Cerrar sesion' onClick={removeAuth} />
    </>
  )
}
