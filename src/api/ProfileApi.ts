import { Profile } from '../GlobalTypes/profileTypes';
import { CustomResponseType } from '../GlobalTypes/responseType';
import $api from './instance';

export const ProfileApi = {
  async getProfile(id: string): Promise<CustomResponseType<Profile> | undefined> {
    try {
      const profileData = await $api.get<CustomResponseType<Profile>>(`user/${id}`);
      return profileData.data;
    } catch (error) {
      console.log(error);
    }
  },
};
