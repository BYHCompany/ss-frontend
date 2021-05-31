import { Title } from 'byh-components';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './List.scss';
import { ListProps } from './ListTypes';

export const List: React.FC<ListProps> = ({ items, label, ...props }): React.ReactElement => {
  return (
    <div className="list" {...props}>
      <Title variant="secondary" className="list__title" type="medium" text={label} />
      <ul className="list_ul">
        {items.map((link) => {
          return (
            <li key={link.href + link.linkName} className="list__item">
              <RouterLink to={link.href}>
                {link.linkName}
                {link.icon ? <div className="list__icon">{link.icon}</div> : <></>}
              </RouterLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
