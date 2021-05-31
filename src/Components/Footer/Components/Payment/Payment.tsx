import { Title } from 'byh-components';
import React from 'react';
import './Payment.scss';

interface PaymentProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  icons: React.ReactNode[];
}

export const Payment: React.FC<PaymentProps> = ({ label, icons }) => {
  return (
    <div style={{ width: '370px' }}>
      <Title style={{ width: '100%' }} variant="secondary" type="medium" text={label} />
      <div className="payment__grid">
        {icons.map((icon, index) => (
          <div className="payment__icon" key={index}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};
