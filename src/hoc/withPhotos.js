import { useQuery, gql } from '@apollo/client'

const witPhotos = gql`
  query getPhotos($categoryId: ID){
    photos(categoryId: $categoryId){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const withPhotos = (categoryId) => {
  const dataPhotos = useQuery(witPhotos, { variables: { categoryId } })

  return dataPhotos
}
