import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import { getAuthUserID } from '../Store/ducks/app/appSelector';

//TODO:
//  1.Improve AUTH HOC

interface WithAuthComponentProps {
  Component: any;
}

const WithAuthComponent: React.FC<WithAuthComponentProps> = ({ Component }) => {
  const params: { userID: string } = useParams();

  const authUserID = useSelector(getAuthUserID)?.toString();
  const pathUserID = params.userID;

  if (authUserID === pathUserID) {
    return <Component />;
  }

  return <Redirect to="/" />;
};

export const withAuthCheck = (Component: any) => {
  return <WithAuthComponent Component={Component} />;
};
