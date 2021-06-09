import { Accordion, Title } from 'byh-components';
import React from 'react';

export const CarEquipment = () => {
  return (
    <div>
      <Title variant="primary" type="small" style={{ marginBottom: 10 }}>
        Комплектация Автомобиля
      </Title>
      <Accordion width={770} title="Обзор">
        Обзор
      </Accordion>
    </div>
  );
};
