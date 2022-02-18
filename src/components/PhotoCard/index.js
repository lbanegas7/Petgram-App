import React from 'react'
import { Article, Button, Img, ImgWrapper } from './style'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNearScreeen } from '../hooks/useNearScreeen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like${id}`

  const [liked, setLiked] = useLocalStorage(key, false)

  const [show, element] = useNearScreeen()

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const card = () => {
    return (
      <>
        <a href={`detail/${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
        </a>
        <Button onClick={() => { setLiked(!liked) }}>
          <Icon size='20px' color='red' />  {likes} likes!
        </Button>
      </>
    )
  }

  return (
    <>
      <Article ref={element}>
        {show && card()}
      </Article>
    </>
  )
}
