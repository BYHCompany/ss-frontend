import { Dropdown, Input, Title } from 'byh-components';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { createArrayObjectOfAllYears } from '../../../services/allYears';
import { getSearchCarModel } from '../../../Store/ducks/searchCar/searchCarSelector';
import { dropdownData, dropdownDataType } from '../../CarSelectForm/Components/ModelForm/ModelForm';

import './VerticalCarForm.scss';
export const VerticalCarForm = () => {
  const [selectedData, setSelectedData] = React.useState({});
  const { t } = useTranslation();
  const model = useSelector(getSearchCarModel);
  const setDropdownInfo = (data: dropdownDataType) => {
    setSelectedData((prev) => {
      return { ...prev, [data.value]: data.id };
    });
  };
  return (
    <div className="verticalCarForm__wrapper">
      <Title type={'small'} variant={'primary'}>
        {t('mainPage:carSelectForm.label')}
      </Title>
      <Dropdown
        callback={setDropdownInfo}
        maxWidth={330}
        height={50}
        variant="default"
        label={t('mainPage:carSelectForm.dropDowns.model')}
        labelFontSize={20}
        itemsScrollHeight={500}
        items={
          model
            ? model.map((m) => {
                return { id: m, label: m, value: 'model' };
              })
            : dropdownData
        }
      />
      {/* <Dropdown
        callback={setDropdownInfo}
        maxWidth={330}
        height={50}
        variant="default"
        label={t('mainPage:carSelectForm.dropDowns.model')}
        labelFontSize={20}
        itemsScrollHeight={500}
        items={
          model
            ? model.map((m) => {
                return { id: m, label: m, value: 'model' };
              })
            : dropdownData
        }
      /> */}
      <div>
        <Dropdown
          callback={setDropdownInfo}
          label={t('mainPage:carSelectForm.dropDowns.year.yearFrom')}
          width={150}
          height={50}
          labelFontSize={20}
          items={createArrayObjectOfAllYears('yearFrom')}
        />
        <span className="">-</span>
        <Dropdown
          callback={setDropdownInfo}
          label={t('mainPage:carSelectForm.dropDowns.year.yearTo')}
          width={150}
          height={50}
          labelFontSize={20}
          items={createArrayObjectOfAllYears('yearTo')}
        />
      </div>
    </div>
  );
};
