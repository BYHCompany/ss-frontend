import React from 'react';
import { Copyrights } from '../Components/Copyrights/Copyrights';
import { Support } from '../Components/Support/Support';
import './style.scss';

export const Footer: React.FC = (): React.ReactElement => {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__container__grid">
          <Support />
        </div>
        <Copyrights />
      </div>
    </div>
  );
};
