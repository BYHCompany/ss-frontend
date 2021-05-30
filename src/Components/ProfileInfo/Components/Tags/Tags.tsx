import { Paper } from 'byh-components';
import React from 'react';
export type tag = {
  id: string;
  backgroundColor: string;
  name: string;
};
interface TagsProps {
  tags: tag[];
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <Paper key={tag.id} height={23} width={68} customBgColor={tag.backgroundColor}>
          {tag.name}
        </Paper>
      ))}
    </>
  );
};
