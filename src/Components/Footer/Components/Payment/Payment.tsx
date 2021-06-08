import { Title } from 'byh-components';
import React from 'react';
import './Payment.scss';
import { PaymentProps } from './PaymentTypes';

export const Payment: React.FC<PaymentProps> = ({ label, icons }) => {
  return (
    <div style={{ width: '370px' }}>
      <Title style={{ width: '100%', marginBottom: '30px' }} variant="secondary" type="medium">
        {label}
      </Title>
      <div className="payment__grid">
        {icons.map((icon, index) => (
          <a href={icon.href} className="payment__icon" key={index}>
            {icon.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
