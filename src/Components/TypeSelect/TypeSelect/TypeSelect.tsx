import { Button } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';
type typeSelectButtonsInterface = {
  id: string;
  label: string;
};
export const TypeSelect = () => {
  const [clicked, setClicked] = React.useState('');
  const { t } = useTranslation();
  const typeSelectButtons = [
    {
      id: 'auto',
      label: t('mainPage:searchTypeButtons.auto'),
    },
    {
      id: 'moto',
      label: t('mainPage:searchTypeButtons.motocycle'),
    },
    {
      id: 'specAuto',
      label: t('mainPage:searchTypeButtons.specialTransport'),
    },
    {
      id: 'different',
      label: t('mainPage:searchTypeButtons.others'),
    },
  ] as typeSelectButtonsInterface[];

  return (
    <div className="type-selector" data-testid="type-selector">
      {typeSelectButtons.map((button) => (
        <Button
          onClick={() => setClicked(button.id)}
          key={button.id}
          paddingHorizontal={5}
          accurateValues
          width={200}
          height={35}
          shadow
          fontSize={22}
          variant={button.id === clicked ? 'primary' : 'default'}>
          {button.label}
        </Button>
      ))}
    </div>
  );
};
