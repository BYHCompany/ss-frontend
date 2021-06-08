import React from 'react';

interface RightSideProps {
  children: React.ReactNode;
}

export const RightSide: React.FC<RightSideProps> = ({ children }) => {
  return (
    <div style={{ width: '62.48%' }} data-testid="right-side">
      {children}
    </div>
  );
};
