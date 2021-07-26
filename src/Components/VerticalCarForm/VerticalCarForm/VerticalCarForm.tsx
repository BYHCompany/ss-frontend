import { Button, Dropdown, Input, Title } from 'byh-components';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createArrayObjectOfAllYears } from '../../../services/allYears';
import { CarEngineType, CarGearboxType } from '../../../services/carFormData';
import { createArrayOfVolumes } from '../../../services/carVolumes';
import {
  fetchSearchData,
  fetchSearchDataForCount,
} from '../../../Store/ducks/searchCar/searchCarReducer';
import {
  getSearchCarModel,
  getSearchMessage,
} from '../../../Store/ducks/searchCar/searchCarSelector';
import { dropdownData, dropdownDataType } from '../../CarSelectForm/Components/ModelForm/ModelForm';

import './VerticalCarForm.scss';
export const VerticalCarForm = () => {
  const [selectedData, setSelectedData] = React.useState({});
  const { control, handleSubmit } = useForm();
  const message = useSelector(getSearchMessage);
  const { t } = useTranslation();
  const model = useSelector(getSearchCarModel);
  const dispatch = useDispatch();
  React.useEffect(() => {
    selectedData && dispatch(fetchSearchDataForCount(selectedData));
  }, [dispatch, selectedData]);

  const setDropdownInfo = (data: dropdownDataType) => {
    setSelectedData((prev) => {
      return { ...prev, [data.value]: data.id };
    });
  };
  const setDataOnBlurInput = (data: any) => {
    setSelectedData((prev) => {
      return { ...prev, ...data };
    });
  };
  const fetchingData = () => {
    dispatch(fetchSearchData(selectedData));
  };

  return (
    <div className="verticalCarForm__wrapper">
      <Title type={'small'} variant={'primary'}>
        {t('mainPage:carSelectForm.label')}
      </Title>
      <Dropdown
        className="verticalCarForm__margin-between"
        callback={setDropdownInfo}
        width={300}
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

      <div className="verticalCarForm__input-wrapper verticalCarForm__margin-between">
        <Dropdown
          callback={setDropdownInfo}
          label={t('mainPage:carSelectForm.dropDowns.year.yearFrom')}
          width={136}
          height={50}
          labelFontSize={20}
          items={createArrayObjectOfAllYears('yearFrom')}
        />
        <span className="verticalCarForm__input-divider">-</span>
        <Dropdown
          callback={setDropdownInfo}
          label={t('mainPage:carSelectForm.dropDowns.year.yearTo')}
          width={136}
          height={50}
          labelFontSize={20}
          items={createArrayObjectOfAllYears('yearTo')}
        />
      </div>
      <Dropdown
        className="verticalCarForm__margin-between"
        callback={setDropdownInfo}
        label={t('mainPage:carSelectForm.dropDowns.engineType')}
        labelFontSize={20}
        width={300}
        height={50}
        variant="default"
        items={CarEngineType}
      />

      <Dropdown
        className="verticalCarForm__margin-between"
        width={300}
        labelFontSize={20}
        height={50}
        label={t('mainPage:carSelectForm.dropDowns.gearBox')}
        items={CarGearboxType}
        callback={setDropdownInfo}
      />
      <form
        className="verticalCarForm__margin-between"
        onBlur={handleSubmit(setDataOnBlurInput)}
        style={{ display: 'flex' }}>
        <Controller
          control={control}
          name="millageFrom"
          defaultValue=""
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                onChange={onChange}
                value={value}
                inputMode="numeric"
                type="number"
                pattern="[0-9]{10}"
                width={136}
                height={50}
                placeholder={t('mainPage:carSelectForm.dropDowns.millage.millageFrom')}
                fontSize={20}
                variant="secondary"
              />
            );
          }}
        />
        <span className="verticalCarForm__input-divider">-</span>
        <Controller
          defaultValue=""
          control={control}
          name="millageTo"
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              name="millageTo"
              inputMode="numeric"
              type="number"
              pattern="[0-9]{10}"
              width={136}
              height={50}
              placeholder={t('mainPage:carSelectForm.dropDowns.millage.millageTo')}
              fontSize={20}
              variant="secondary"
            />
          )}
        />
      </form>

      <div className="verticalCarForm__input-wrapper verticalCarForm__margin-between">
        <Dropdown
          callback={setDropdownInfo}
          label={t('mainPage:carSelectForm.dropDowns.engineVolume.volumeFrom')}
          width={136}
          height={50}
          labelFontSize={20}
          items={createArrayOfVolumes('volumeFrom')}
        />
        <span className="verticalCarForm__input-divider">-</span>
        <Dropdown
          callback={setDropdownInfo}
          label={t('mainPage:carSelectForm.dropDowns.engineVolume.volumeTo')}
          width={136}
          height={50}
          labelFontSize={20}
          items={createArrayOfVolumes('volumeTo')}
        />
      </div>
      <p style={{ marginBottom: 20 }}>{message}</p>
      <Button
        width={300}
        onClick={() => fetchingData()}
        height={45}
        fontSize={22}
        variant="primary">
        {t('mainPage:buttons.find')}
      </Button>
    </div>
  );
};
