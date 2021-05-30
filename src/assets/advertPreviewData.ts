export type advertDataType = {
  id: string;
  title: string;
  photo: string;
  year: string;
  isElectric?: boolean;
  isInTrending?: boolean;
  price: string;
};

export const advertData = [
  {
    id: '1',
    title: 'Advert',
    photo: 'https://kursors.lv/wp-content/uploads/2019/09/2020-porsche-taycan.jpg',
    year: '2020',
    isElectric: true,
    isInTrending: true,
    price: '223 000 $',
  },
] as advertDataType[];
