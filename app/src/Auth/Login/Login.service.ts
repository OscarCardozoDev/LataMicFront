import { LoginForm, LoginResponse } from './Login.types';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from './Login.queries';

export const useLogin = () => {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const sendForm = async (input: LoginForm): Promise<LoginResponse> => {
    const response = await loginMutation({
      variables: input,
    });
    return {
      token: response.data.login.token,
    };
  };

  return { sendForm, data, loading, error };
};
