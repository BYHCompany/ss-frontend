import { CustomResponseType } from '../GlobalTypes/responseType';
import { newsType } from '../Store/ducks/news/@types';
import $api from './instance';

export const NewsApi = {
  async getLastTenNews(): Promise<CustomResponseType<newsType[]> | undefined> {
    try {
      const newsData = await $api.get<CustomResponseType<newsType[]>>('/news/lastTen/short');
      return newsData.data;
    } catch (error) {
      console.log(error);
    }
  },
};
