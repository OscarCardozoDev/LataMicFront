import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "./Register.queries";
import { RegisterForm, RegisterResponse } from "./Register.types";

export const useRegister = () => {
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER_MUTATION);

  const sendForm = async (input: RegisterForm): Promise<RegisterResponse> => {
    const response = await registerMutation({
      variables: {
        name: input.name,
        lastname: input.lastname,
        nickname: input.nickname,
        email: input.email,
        password: input.password,
        country_id: Number(input.country_id), 
        birthday: input.birthday.toISOString(),
      },
    });
    return {
      token: response.data.register.token,
    };
  };

  return { sendForm, data, loading, error };
};
