import React from 'react'
import { useInputValue } from '../hooks/useInputValue'
import { Button, Error, Form, Input } from './style'

export const UserForm = ({ onSubmit, titulo, error }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }
  return (
    <>
      <h2>{titulo}</h2>
      <Form onSubmit={handleSubmit}>
        <Input type='email' placeholder='Email' {...email} />
        <Input type='password' placeholder='Password' {...password} />
        <Button>{titulo}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
