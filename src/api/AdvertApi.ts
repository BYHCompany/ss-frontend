import { Advert } from '../GlobalTypes/advertTypes';
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
};
