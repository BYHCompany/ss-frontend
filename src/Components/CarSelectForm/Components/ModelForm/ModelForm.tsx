import { Dropdown } from 'byh-components';
import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { getSearchCarModel } from '../../../../Store/ducks/searchCar/searchCarSelector';
import './ModelForm.scss';
import { useSelector } from 'react-redux';
import { createArrayObjectOfAllYears } from '../../../../services/allYears';
import { CarEngineType } from '../../../../services/carFormData';
import { createArrayOfVolumes } from '../../../../services/carVolumes';
export type dropdownDataType = {
  label: string;
  id: string;
  value: string;
};

interface IProps {
  setSelectedData: Dispatch<SetStateAction<{}>>;
}

export const dropdownData = [
  {
    label: '',
    id: '12134',
    value: '',
  } as dropdownDataType,
];

export const ModelForm: React.FC<IProps> = ({ setSelectedData }) => {
  const { t } = useTranslation();
  const model = useSelector(getSearchCarModel);
  const setDropdownInfo = (data: dropdownDataType) => {
    setSelectedData((prev) => {
      return { ...prev, [data.value]: data.id };
    });
  };

  return (
    <div data-testid="model-form__wrapper" className="model-form__wrapper">
      <Dropdown
        callback={setDropdownInfo}
        width={322}
        height={50}
        variant="default"
        label={t('mainPage:carSelectForm.dropDowns.model')}
        labelFontSize={22}
        itemsScrollHeight={500}
        items={
          model
            ? model.map((m) => {
                return { id: m, label: m, value: 'model' };
              })
            : dropdownData
        }
        className="model-form__padding"
      />
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          callback={setDropdownInfo}
          label={t('mainPage:carSelectForm.dropDowns.year.yearFrom')}
          width={150}
          height={50}
          labelFontSize={22}
          items={createArrayObjectOfAllYears('yearFrom')}
        />
        <span className="short-input__divider">-</span>
        <Dropdown
          callback={setDropdownInfo}
          label={t('mainPage:carSelectForm.dropDowns.year.yearTo')}
          width={150}
          height={50}
          labelFontSize={22}
          items={createArrayObjectOfAllYears('yearTo')}
        />
      </div>
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          callback={setDropdownInfo}
          label={t('mainPage:carSelectForm.dropDowns.engineVolume.volumeFrom')}
          width={150}
          height={50}
          labelFontSize={22}
          items={createArrayOfVolumes('volumeFrom')}
        />
        <Dropdown
          callback={setDropdownInfo}
          label={t('mainPage:carSelectForm.dropDowns.engineVolume.volumeTo')}
          width={150}
          height={50}
          labelFontSize={22}
          items={createArrayOfVolumes('volumeTo')}
        />
      </div>
      <Dropdown
        className="model-form__padding"
        callback={setDropdownInfo}
        label={t('mainPage:carSelectForm.dropDowns.engineType')}
        labelFontSize={22}
        width={322}
        height={50}
        variant="default"
        items={CarEngineType}
      />
    </div>
  );
};
