type typeSelectButtonsInterface = {
  id: string;
  label: string;
};

export const typeSelectButtons = [
  {
    id: 'auto',
    label: 'Автомобили',
  },
  {
    id: 'moto',
    label: 'Мототранспорт',
  },
  {
    id: 'specAuto',
    label: 'Спец. транспорт',
  },
  {
    id: 'different',
    label: 'Другие',
  },
] as typeSelectButtonsInterface[];
