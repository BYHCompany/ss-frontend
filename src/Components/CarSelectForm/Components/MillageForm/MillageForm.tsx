import { CheckBox, Dropdown, Title } from 'byh-components';
import React from 'react';
import { dropdownData } from '../ModelForm/ModelForm';

export const MillageForm = () => {
  const mockFunc = () => {};
  return (
    <div style={{ marginTop: 50, width: 496 }}>
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          width={238}
          height={50}
          labelFontSize={24}
          label="Пробег от"
          items={dropdownData}
          callback={mockFunc}
        />
        <span className="short-input__divider ">-</span>
        <Dropdown
          width={238}
          height={50}
          label="До"
          labelFontSize={24}
          items={dropdownData}
          callback={mockFunc}
        />
      </div>
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          labelFontSize={24}
          width={238}
          height={50}
          label="Кузов"
          items={dropdownData}
          callback={mockFunc}
        />
        <Dropdown
          width={238}
          labelFontSize={24}
          height={50}
          label="Коробка"
          items={dropdownData}
          callback={mockFunc}
        />
      </div>
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          width={377}
          height={50}
          labelFontSize={24}
          label="Привод"
          items={dropdownData}
          callback={mockFunc}
        />
        <CheckBox callback={mockFunc} width={34} height={34} />
        <Title type="ultraSmall" variant="primary" text="ГБО" />
      </div>
    </div>
  );
};
