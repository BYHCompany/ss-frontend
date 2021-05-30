import { Title } from 'byh-components';
import React from 'react';
import './List.scss';

export type Link = {
  href: string;
  linkName: string;
  icon?: React.ReactNode;
};

interface ListProps {
  label: string;
  items: Link[];
}

export const List: React.FC<ListProps> = ({ items, label }): React.ReactElement => {
  return (
    <div className="list">
      <Title variant="secondary" className="list__title" type="medium" text={label} />
      <ul className="list_ul">
        {items.map((link) => {
          return (
            <li key={link.href + link.linkName} className="list__item">
              <a href={link.href}>{link.linkName}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
