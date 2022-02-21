import React from 'react'
import { Article, Img, ImgWrapper } from './style'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNearScreeen } from '../hooks/useNearScreeen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../Container/ToggleLikeMutation'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like${id}`

  const [liked, setLiked] = useLocalStorage(key, false)

  // const { mutation, mutationLoading, mutationError } = ToggleLikeMutation()
  const { mutation } = ToggleLikeMutation()

  const handleFavClick = () => {
    !liked && mutation({ variables: { input: { id } } })
    setLiked(!liked)
  }

  const [show, element] = useNearScreeen()
  const card = () => {
    return (
      <>
        <Link to={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
        </Link>
        <FavButton liked={liked} likes={likes} clickBtn={handleFavClick} />
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
