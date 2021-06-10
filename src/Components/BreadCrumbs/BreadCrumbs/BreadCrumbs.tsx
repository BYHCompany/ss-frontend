import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from '../../../routes';
import './BreadCrumbs.scss';

type crumbs = {
  Component: any;
  exact?: boolean;
  name: string;
  path: any;
};

interface BreadCrumbsType {
  crumbs: crumbs[];
}

export const BreadCrumbs: React.FC<BreadCrumbsType> = ({ crumbs }) => {
  if (crumbs.length <= 1) {
    return null;
  }
  const reverseCrumbs = crumbs.reverse();

  return (
    <div className="breadCrumbs__wrapper">
      {reverseCrumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <>
            <span className="breadCrumbs__text" key={key}>
              {name}
            </span>
          </>
        ) : (
          <>
            <Link className="breadCrumbs__text breadCrumbs__link" key={key} to={path}>
              {name}
            </Link>
            <span className="breadCrumbs__divider"> / </span>
          </>
        ),
      )}
    </div>
  );
};
