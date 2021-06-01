import { Paper } from 'byh-components';
import React from 'react';
import { LeftSide } from '../Component/LeftSide/LeftSide';
import { RightSide } from '../Component/RightSide/RightSide';
import './AuthTemplate.scss';

interface AuthTemplateProps {
  children: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <Paper height={750} customBgColor={'rgba(255, 255, 255, 0.5)'}>
      <LeftSide />
      <RightSide children={children} />
    </Paper>
  );
};
