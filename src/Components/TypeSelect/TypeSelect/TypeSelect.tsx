import { Button } from 'byh-components';
import React from 'react';
import { typeSelectButtons } from '../../../assets/typeSelectButtons';

import './style.scss';

export const TypeSelect = () => {
  const [clicked, setClicked] = React.useState('');
  return (
    <div className="type-selector" data-testid="type-selector">
      {typeSelectButtons.map((button) => (
        <Button
          onClick={() => setClicked(button.id)}
          key={button.id}
          paddingHorizontal={5}
          accurateValues
          width={225}
          height={40}
          shadow
          fontSize={24}
          variant={button.id === clicked ? 'primary' : 'default'}>
          {button.label}
        </Button>
      ))}
    </div>
  );
};
