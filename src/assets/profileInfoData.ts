import { ProfileInfoProps } from '../Components/ProfileInfo/ProfileInfo/ProfileInfo';

export const profileInfoData = {
  firstName: 'Andrey',
  lastName: 'Maksimov',
  about: 'I love cars   ',
  location: 'Latvia, Riga',
  photoUrl:
    'https://images.unsplash.com/photo-1621972660772-6a0427d5e102?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  tags: [
    {
      bg: '#E82127',
      id: 'tesla',
      name: 'Tesla',
    },
    {
      backgroundColor: '#E82127',
      id: 'merc',
      name: 'Mercedes-Benz',
    },
  ],
} as ProfileInfoProps;
