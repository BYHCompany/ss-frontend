import { Title } from 'byh-components';
import React from 'react';
import './List.scss';

export type Link = {
  href: string;
  linkName: string;
  icon?: React.ReactNode;
};

interface ListProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  items: Link[];
}

export const List: React.FC<ListProps> = ({ items, label, ...props }): React.ReactElement => {
  return (
    <div className="list" {...props}>
      <Title variant="secondary" className="list__title" type="medium" text={label} />
      <ul className="list_ul">
        {items.map((link) => {
          return (
            <li key={link.href + link.linkName} className="list__item">
              <a href={link.href}>
                {link.linkName}
                {link.icon ? <div className="list__icon">{link.icon}</div> : <></>}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
