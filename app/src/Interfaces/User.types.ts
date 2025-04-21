import { Country } from "./Country.types";

export interface User {
  name: string;
  lastname: string;
  nickname: string;
  email: string;
  country_id: number;
  country: Country;
  birthday: Date;
}
  