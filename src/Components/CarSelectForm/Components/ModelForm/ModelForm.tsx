import { Dropdown } from 'byh-components';
import React from 'react';
import './ModelForm.scss';

type dropdownDataType = [
  {
    label: string;
    id: string;
    value: string;
  },
];
export const dropdownData = [
  {
    label: '3-series',
    id: '12134',
    value: '3s',
  },
] as dropdownDataType;

export const ModelForm = () => {
  const mockFunc = () => {};
  return (
    <div className="model-form__wrapper">
      <Dropdown
        callback={mockFunc}
        width={322}
        height={50}
        variant="default"
        label="Модель"
        labelFontSize={24}
        items={dropdownData}
        className="model-form__padding"
      />
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          callback={mockFunc}
          label="Год от"
          width={150}
          height={50}
          labelFontSize={24}
          items={dropdownData}
        />
        <span className="short-input__divider">-</span>
        <Dropdown
          callback={mockFunc}
          label="Год до"
          width={150}
          height={50}
          labelFontSize={24}
          items={dropdownData}
        />
      </div>
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          callback={mockFunc}
          label="Объём от"
          width={150}
          height={50}
          labelFontSize={24}
          items={dropdownData}
        />
        <Dropdown
          callback={mockFunc}
          label="До"
          width={150}
          height={50}
          labelFontSize={24}
          items={dropdownData}
        />
      </div>
      <Dropdown
        className="model-form__padding"
        callback={mockFunc}
        label="Тип Двигателя"
        labelFontSize={24}
        width={322}
        height={50}
        variant="default"
        items={dropdownData}
      />
    </div>
  );
};
