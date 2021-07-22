import { CustomResponseType } from '../GlobalTypes/responseType';
import $api from './instance';

export const CarSearchApi = {
  async GetMake(): Promise<CustomResponseType<string[]> | undefined> {
    try {
      const makeData = await $api.get(`adverts/search/make`);

      return makeData.data;
    } catch (error) {
      console.log(error);
    }
  },
  async GetModel(make: string): Promise<CustomResponseType<string[]> | undefined> {
    try {
      const modelData = await $api.post(`adverts/search/model`, { make });

      return modelData.data;
    } catch (error) {
      console.log(error);
    }
  },
};
