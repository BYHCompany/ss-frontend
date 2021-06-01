import React from 'react';

interface RightSideProps {
  children: React.ReactNode;
}

export const RightSide: React.FC<RightSideProps> = ({ children }) => {
  return <div data-testid="right-side">{children}</div>;
};
