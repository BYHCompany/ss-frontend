import { CheckBox, Dropdown, Title } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { dropdownData } from '../ModelForm/ModelForm';

export const MillageForm = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = React.useState(false);
  const mockFunc = () => {};

  const onChangeHandler = () => {
    setChecked(!checked);
  };
  return (
    <div data-testid="millage-form" style={{ marginTop: 50, width: 496 }}>
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          width={238}
          height={50}
          labelFontSize={24}
          label={t('mainPage:carSelectForm.dropDowns.millage.millageFrom')}
          items={dropdownData}
          callback={mockFunc}
        />
        <span className="short-input__divider ">-</span>
        <Dropdown
          width={238}
          height={50}
          label={t('mainPage:carSelectForm.dropDowns.millage.millageTo')}
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
          label={t('mainPage:carSelectForm.dropDowns.carBody')}
          items={dropdownData}
          callback={mockFunc}
        />
        <Dropdown
          width={238}
          labelFontSize={24}
          height={50}
          label={t('mainPage:carSelectForm.dropDowns.gearBox')}
          items={dropdownData}
          callback={mockFunc}
        />
      </div>
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          width={377}
          height={50}
          labelFontSize={24}
          label={t('mainPage:carSelectForm.dropDowns.transmission')}
          items={dropdownData}
          callback={mockFunc}
        />
        <CheckBox checked={checked} onChangeHandler={onChangeHandler} width={34} height={34} />
        <Title type="ultraSmall" variant="primary">
          {t('mainPage:carSelectForm.dropDowns.gasEquipment')}
        </Title>
      </div>
    </div>
  );
};
