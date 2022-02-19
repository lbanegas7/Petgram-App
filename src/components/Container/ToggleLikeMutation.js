import { gql, useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`
export const ToggleLikeMutation = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(LIKE_PHOTO)
  return { mutation, mutationLoading, mutationError }
}
