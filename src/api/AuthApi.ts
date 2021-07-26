import { CustomResponseType } from '../GlobalTypes/responseType';
import { LoginData, LoginResponseData } from '../Store/ducks/auth/@types';
import $api from './instance';

export const AuthApi = {
  async login(loginData: LoginData): Promise<CustomResponseType<LoginResponseData> | undefined> {
    try {
      const rawData = await $api.post<CustomResponseType<LoginResponseData>>(
        '/auth/login',
        loginData,
      );
      return rawData.data;
    } catch (error) {
      console.log(error);
    }
  },

  async checkUser(): Promise<CustomResponseType<LoginResponseData> | undefined> {
    try {
      const rawData = await $api.get<CustomResponseType<LoginResponseData>>('/auth/checkAuthToken');
      return rawData.data;
    } catch (error) {
      console.log(error);
    }
  },
};
