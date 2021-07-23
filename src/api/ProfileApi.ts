import { Tag } from '../Components/Tags/Tags/Tags';
import { AdvertWithoutCar } from '../GlobalTypes/advertTypes';
import {
  ProfileAdditionalInfo,
  ProfileMainInfo,
  ProfileRequiredInfo,
  ProfileSettings,
  ProfileSituationalInfo,
  UnformattedFullProfile,
} from '../GlobalTypes/profileTypes';
import { CustomResponseType } from '../GlobalTypes/responseType';
import $api from './instance';

export const ProfileApi = {
  /**
   *  Gets full user data with all fields
   *
   * @param id - user profile ID
   * @returns CustomResponseType with Profile data
   */
  async getFullProfile(
    id: string,
  ): Promise<CustomResponseType<UnformattedFullProfile> | undefined> {
    try {
      const profileData = await $api.get<CustomResponseType<UnformattedFullProfile>>(`user/${id}`);
      return profileData.data;
    } catch (error) {
      console.log(error);
    }
  },

  /**
   *  Gets only main user info with all fields
   *
   * @param id - user profile ID
   * @returns CustomResponseType with ProfileMainInfo (see ProfileMainInfo type)
   */
  async getMainProfileInfo(id: string): Promise<CustomResponseType<ProfileMainInfo> | undefined> {
    try {
      const data = await (
        await $api.get<CustomResponseType<ProfileMainInfo>>(`user/${id}?type=main`)
      ).data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  /**
   *  Gets only required user info with all fields
   *
   * @param id - user profile ID
   * @returns CustomResponseType with ProfileRequiredInfo (see ProfileRequiredInfo type)
   */
  async getRequiredProfileInfo(
    id: string,
  ): Promise<CustomResponseType<ProfileRequiredInfo> | undefined> {
    try {
      const data = await (
        await $api.get<CustomResponseType<ProfileRequiredInfo>>(`user/${id}?type=required`)
      ).data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  /**
   *  Gets only additional user info with all fields
   *
   * @param id - user profile ID
   * @returns CustomResponseType with ProfileAdditionalInfo (see ProfileAdditionalInfo type)
   */
  async getAdditionalProfileInfo(
    id: string,
  ): Promise<CustomResponseType<ProfileAdditionalInfo> | undefined> {
    try {
      const data = await (
        await $api.get<CustomResponseType<ProfileAdditionalInfo>>(`user/${id}?type=additional`)
      ).data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  /**
   *  Gets only situational user info with all fields
   *
   * @param id - user profile ID
   * @returns CustomResponseType with ProfileSituationalInfo (see ProfileSituationalInfo type)
   */
  async getSituationalProfileInfo(
    id: string,
  ): Promise<CustomResponseType<ProfileSituationalInfo> | undefined> {
    try {
      const data = await (
        await $api.get<CustomResponseType<ProfileSituationalInfo>>(`user/${id}?type=situational`)
      ).data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  /**
   *  Gets only user settings info with all fields
   *
   * @param id - user profile ID
   * @returns CustomResponseType with ProfileSettings (see ProfileSettings type)
   */
  async getSettingsProfileInfo(
    id: string,
  ): Promise<CustomResponseType<ProfileSettings> | undefined> {
    try {
      const data = await (
        await $api.get<CustomResponseType<ProfileSettings>>(`user/${id}?type=settings`)
      ).data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  /**
   *  Gets only user adverts info with all fields
   *
   * @param id - user profile ID
   * @returns CustomResponseType with array of AdvertWithoutCar (see AdvertWithoutCar type)
   */
  async getAdvertsProfileInfo(
    id: string,
  ): Promise<CustomResponseType<AdvertWithoutCar[]> | undefined> {
    try {
      const data = await (
        await $api.get<CustomResponseType<AdvertWithoutCar[]>>(`user/${id}?type=adverts`)
      ).data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  /**
   *  Gets only user favorite car tags info with all fields
   *
   * @param id - user profile ID
   * @returns CustomResponseType with array of Tag (see Tag type)
   */
  async getFavoritesProfileInfo(id: string): Promise<CustomResponseType<Tag[]> | undefined> {
    try {
      const data = await (
        await $api.get<CustomResponseType<Tag[]>>(`user/${id}?type=favorites`)
      ).data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
