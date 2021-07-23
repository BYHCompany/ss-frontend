import { Advert, SmallAdvert } from '../GlobalTypes/advertTypes';
import { CustomResponseType } from '../GlobalTypes/responseType';
import $api from './instance';

export const AdvertApi = {
  async GetAdvert(id: string): Promise<CustomResponseType<Advert> | undefined> {
    try {
      const advertData = await $api.get(`adverts/${id}`);

      return advertData.data;
    } catch (error) {
      console.log(error);
    }
  },

  async GetSmallAdvertsByOwnerID(
    id: string,
  ): Promise<CustomResponseType<SmallAdvert[]> | undefined> {
    try {
      const advertData = await $api.get(`adverts/?size=small&ownerID=${id}`);

      return advertData.data;
    } catch (error) {
      console.log(error);
    }
  },
};
