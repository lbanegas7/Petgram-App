import React from 'react'
import { useInputValue } from '../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'
import { Error, Form, Input, Title } from './style'

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
      <Title>{titulo}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type='email' placeholder='Email' {...email} />
        <Input type='password' placeholder='Password' {...password} />
        <SubmitButton title={titulo} />
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
