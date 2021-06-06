import { Paper } from 'byh-components';
import React from 'react';
import './Tags.scss';

export type Tag = {
  id: string;
  backgroundColor: string;
  name: string;
};
export interface TagsProps {
  tags: Tag[];
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <Paper
          display={'inline-block'}
          key={tag.id}
          height={23}
          className="tag__wrapper"
          customBgColor={tag.backgroundColor}>
          {tag.name}
        </Paper>
      ))}
    </>
  );
};
