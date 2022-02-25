import React from 'react'
import { Button } from './style'

export const SubmitButton = ({ title, onClick }) => {
  return (
    <Button onClick={onClick}>{title}</Button>
  )
}
