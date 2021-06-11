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
  const cloneCrumbs = JSON.parse(JSON.stringify(crumbs));
  const reverseCrumbs = cloneCrumbs.reverse();
  return (
    <div className="breadCrumbs__wrapper">
      {/* @ts-ignore */}
      {reverseCrumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <React.Fragment key={key}>
            <span className="breadCrumbs__text">{name}</span>
          </React.Fragment>
        ) : (
          <React.Fragment key={key}>
            <Link className="breadCrumbs__text breadCrumbs__link" to={path}>
              {name}
            </Link>
            <span className="breadCrumbs__divider"> / </span>
          </React.Fragment>
        ),
      )}
    </div>
  );
};
