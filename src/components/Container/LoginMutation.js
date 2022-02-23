import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
    mutation login($input: UserCredentials!) {
        login (input: $input)
    }
`

export const LoginMutation = () => {
  const [loginMutation, { loading, error }] = useMutation(LOGIN)

  return { loginMutation, loadingLogin: loading, errorLogin: error }
}
