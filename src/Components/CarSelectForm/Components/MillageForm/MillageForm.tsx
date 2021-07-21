import { CheckBox, Dropdown, Input, Title } from 'byh-components';
import React, { Dispatch, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CarBodyData, CarGearboxType, CarTransmition } from '../../../../services/carFormData';
import { dropdownDataType } from '../ModelForm/ModelForm';

interface IProps {
  setSelectedData: Dispatch<SetStateAction<{}>>;
}
export const MillageForm: React.FC<IProps> = ({ setSelectedData }) => {
  const { control, handleSubmit } = useForm();
  const { t } = useTranslation();
  const [checked, setChecked] = React.useState(false);
  const setMillageFormData = (data: dropdownDataType) => {
    setSelectedData((prev) => {
      return { ...prev, [data.value]: data.id };
    });
  };

  const onSubmit = (data: any) => {
    setSelectedData((prev) => {
      return { ...prev, ...data };
    });
  };

  const onChangeHandler = () => {
    setChecked(!checked);
    setSelectedData((prev) => {
      return { ...prev, gasEquip: checked };
    });
  };

  return (
    <div data-testid="millage-form" style={{ marginTop: 50, width: 496 }}>
      <div className="model-form__dropdown model-form__padding">
        <form onBlur={handleSubmit(onSubmit)} style={{ display: 'flex' }}>
          <Controller
            control={control}
            name="millageFrom"
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  onChange={onChange}
                  value={value}
                  inputMode="numeric"
                  type="number"
                  pattern="[0-9]{10}"
                  width={238}
                  height={50}
                  placeholder={t('mainPage:carSelectForm.dropDowns.millage.millageFrom')}
                  fontSize={22}
                  variant="secondary"
                />
              );
            }}
          />
          <span className="short-input__divider ">-</span>
          <Controller
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
                width={238}
                height={50}
                placeholder={t('mainPage:carSelectForm.dropDowns.millage.millageTo')}
                fontSize={22}
                variant="secondary"
              />
            )}
          />
        </form>
      </div>
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          labelFontSize={22}
          width={238}
          height={50}
          label={t('mainPage:carSelectForm.dropDowns.carBody')}
          items={CarBodyData}
          callback={setMillageFormData}
        />
        <Dropdown
          width={238}
          labelFontSize={22}
          height={50}
          label={t('mainPage:carSelectForm.dropDowns.gearBox')}
          items={CarGearboxType}
          callback={setMillageFormData}
        />
      </div>
      <div className="model-form__dropdown model-form__padding">
        <Dropdown
          width={377}
          height={50}
          labelFontSize={22}
          label={t('mainPage:carSelectForm.dropDowns.transmission')}
          items={CarTransmition}
          callback={setMillageFormData}
        />
        <CheckBox checked={checked} onChangeHandler={onChangeHandler} width={34} height={34} />
        <Title type="ultraSmall" variant="primary">
          {t('mainPage:carSelectForm.dropDowns.gasEquipment')}
        </Title>
      </div>
    </div>
  );
};
