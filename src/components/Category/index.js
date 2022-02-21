import React from 'react'
import { Link } from 'react-router-dom'
import { Anchor, Image } from './style'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, emoji = '?', id }) => {
  const path = `/pet/${id}`
  return (
    <>
      <Link to={path}><Anchor><Image src={cover} /> {emoji} </Anchor> </Link>
    </>
  )
}
