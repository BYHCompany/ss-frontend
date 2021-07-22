import { CarBodyTypes, EngineType, Gearbox, TransmissionType } from './carTypes';

export type searchAdvert = {
  carBody?: CarBodyTypes;
  engineType?: EngineType;
  model?: string;
  gasEquip: boolean;
  gearbox?: Gearbox;
  make?: string;
  millageFrom?: string;
  millageTo?: string;
  priceFrom?: string;
  priceTo?: string;
  transmission?: TransmissionType;
  volumeFrom?: string;
  volumeTo?: string;
  yearFrom?: string;
  yearTo?: string;
};
