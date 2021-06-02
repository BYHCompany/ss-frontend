import {
  CarBodyTypes,
  CarState,
  EngineType,
  Gearbox,
  TransmitionType,
} from '../GlobalTypes/carTypes';

//This fn translates engine type to normal users language
export const translateEngineType = (engineType: EngineType) => {
  switch (engineType) {
    case 'Diesel':
      return 'Дизель';
    case 'Gasoline':
      return 'Бензин';
    case 'Hybrid':
      return 'Гибрид';
    case 'Electric':
      return 'Электрический';
    case 'hydrogen':
      return 'Водородный';
  }
};

//This fn translates gearbox type to normal users language
export const translateGearboxType = (gearbox: Gearbox) => {
  switch (gearbox) {
    case 'Automatic':
      return 'Автомат';
    case 'Manual':
      return 'Механическая';
    case 'robot':
      return 'Роботизированная';
    case 'variable':
      return 'Вариатор';
  }
};

//This fn translates car body type to normal users language
export const translateBodyType = (carBody: CarBodyTypes) => {
  switch (carBody) {
    case 'sedan':
      return 'Седан';
    case 'convertible':
      return 'Кабриолет';
    case 'coupe':
      return 'Купе';
    case 'minivan':
      return 'Минивен';
    case 'sportCar':
      return 'Спорткар';
    case 'suv':
      return 'Спортивный кроссовер';
    case 'wagon':
      return 'Универсал';
    case 'pickup':
      return 'Пикап';
    case 'hatchback':
      return 'Хетчбэк';
  }
};

//This fn translates engine type to normal users language
export const translateStateType = (state: CarState) => {
  switch (state) {
    case 'New':
      return 'Новый';
    case 'Used':
      return 'Б/У';
  }
};

//This fn translates transmision type to normal users language
export const translateTransmitionType = (transmition: TransmitionType) => {
  switch (transmition) {
    case 'Rear wheel drive':
      return 'Задний';
    case 'Front wheel drive':
      return 'Передний';
    case 'All wheel drive (AWD)':
      return 'Полный';
  }
};
