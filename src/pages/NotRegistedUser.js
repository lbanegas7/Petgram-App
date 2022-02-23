import React, { useContext } from 'react'
import { LoginMutation } from '../components/Container/LoginMutation'
import { RegisterMutation } from '../components/Container/RegisterMutation'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'

export const NotRegistedUser = () => {
  const { activateAuth } = useContext(Context)

  // mutacion de registro y login
  const { registerMutation, loading, error } = RegisterMutation()
  const { loginMutation, loadingLogin, errorLogin } = LoginMutation()
  // console.log(registerMutation)

  // funcion a ejecutarse al registrarse nuevo usuario
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }

    registerMutation({ variables: variable }).then(({ data }) => {
      // console.log(data, 1)
      const { signup } = data
      activateAuth(signup)
    })
  }
  const errorMsj = error && '*ERROR, por favor verificar sus credenciales.*'

  const onSubmitLogin = ({ email, password }) => {
    const variableLogin = { input: { email, password } }

    loginMutation({ variables: variableLogin }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }
  const errorMsjLogin = errorLogin && '*ERROR, contraseña o correo incorrecto.*'

  return (
    <>
      <UserForm titulo='Registrarse' onSubmit={onSubmit} error={errorMsj} />
      <UserForm titulo='Iniciar sesion' onSubmit={onSubmitLogin} error={errorMsjLogin} />
    </>
  )
}
