import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import './Copyrights.scss';

export const Copyrights: React.FC = (): React.ReactElement => {
  return (
    <div className="container">
      <div className="copyright">
        <p>SS V8 | {new Date().getFullYear()}</p>
        <p>
          <AiOutlineCopyrightCircle /> All copyrights reserved
        </p>
        <p>info@ssv8.com</p>
      </div>
    </div>
  );
};
