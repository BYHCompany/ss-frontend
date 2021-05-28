import { Button } from 'byh-components';
import React from 'react';
import { CgFileDocument } from 'react-icons/cg';
import { RiAccountBoxLine } from 'react-icons/ri';
import './HeaderButtons.scss';
export const HeaderButtons = () => {
  return (
    <div className="header-buttons" data-testid="header-buttons">
      <Button
        startIcon={<CgFileDocument />}
        height={43}
        width={297}
        label={'Подать объявление'}
        paddingVertical={5}
        paddingHorizontal={10}
        variant="secondary"
        fontSize={24}
      />
      <Button
        startIcon={<RiAccountBoxLine />}
        height={43}
        width={170}
        paddingVertical={5}
        label={'Кабинет'}
        variant="secondary"
        fontSize={24}
      />
    </div>
  );
};
