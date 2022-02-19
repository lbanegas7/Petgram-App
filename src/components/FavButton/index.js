import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './style'

export const FavButton = ({ liked, likes, clickBtn }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <>
      <Button onClick={() => clickBtn()}>
        <Icon size='20px' color='red' />  {likes} likes!
      </Button>
    </>
  )
}
