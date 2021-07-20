import { Dropdown } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { getSearchCarModel } from '../../../../Store/ducks/searchCar/searchCarSelector';
import './ModelForm.scss';
import { useSelector, useDispatch } from 'react-redux';
type dropdownDataType = [
  {
    label: string;
    id: string;
    value: string;
  },
];
export const dropdownData = [
  {
    label: '',
    id: '12134',
    value: '',
  },
] as dropdownDataType;

export const ModelForm = () => {
  const { t } = useTranslation();
  const model = useSelector(getSearchCarModel);
  const mockFunc = () => {};

  return (
    <div data-testid="model-form__wrapper" className="model-form__wrapper">
      <Dropdown
        callback={mockFunc}
        width={322}
        height={50}
        variant="default"
        label={t('mainPage:carSelectForm.dropDowns.model')}
        labelFontSize={22}
        itemsScrollHeight={500}
        items={
          model
            ? model.map((m) => {
                return { id: m, label: m, value: m };
              })
            : dropdownData
        }
        className="model-form__padding"
      />
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          callback={mockFunc}
          label={t('mainPage:carSelectForm.dropDowns.year.yearFrom')}
          width={150}
          height={50}
          labelFontSize={22}
          items={dropdownData}
        />
        <span className="short-input__divider">-</span>
        <Dropdown
          callback={mockFunc}
          label={t('mainPage:carSelectForm.dropDowns.year.yearTo')}
          width={150}
          height={50}
          labelFontSize={22}
          items={dropdownData}
        />
      </div>
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          callback={mockFunc}
          label={t('mainPage:carSelectForm.dropDowns.engineVolume.volumeFrom')}
          width={150}
          height={50}
          labelFontSize={22}
          items={dropdownData}
        />
        <Dropdown
          callback={mockFunc}
          label={t('mainPage:carSelectForm.dropDowns.engineVolume.volumeTo')}
          width={150}
          height={50}
          labelFontSize={22}
          items={dropdownData}
        />
      </div>
      <Dropdown
        className="model-form__padding"
        callback={mockFunc}
        label={t('mainPage:carSelectForm.dropDowns.engineType')}
        labelFontSize={22}
        width={322}
        height={50}
        variant="default"
        items={dropdownData}
      />
    </div>
  );
};
