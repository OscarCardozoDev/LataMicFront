export interface RegisterForm {
  name: string;
  lastname: string;
  nickname: string;
  email: string;
  password: string;
  country_id: number;
  birthday: Date;
}

export interface RegisterResponse {
  token: string;
}
