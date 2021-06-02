import { Dropdown } from 'byh-components';
import React from 'react';
type dropdownDataType = [
  {
    label: '3-series';
    id: '9921d';
    value: '3s';
  },
];
const dropdownData = [{}] as dropdownDataType;

export const ModelForm = () => {
  return (
    <div className="model-form__wrapper">
      <Dropdown label="Модель" items={dropdownData} />
    </div>
  );
};
