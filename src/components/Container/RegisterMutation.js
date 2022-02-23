import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
    mutation signup($input: UserCredentials!) {
        signup(input: $input)
    }
`

export const RegisterMutation = () => {
  const [registerMutation, { loading, error }] = useMutation(REGISTER)

  return { registerMutation, loading, error }
}
