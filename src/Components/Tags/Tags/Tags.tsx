import { Button, Paper } from 'byh-components';
import React from 'react';
import './Tags.scss';

export type Tag = {
  id: string;
  bg: string;
  name: string;
};
export interface TagsProps {
  tags?: Tag[];
  withButton?: boolean;
}

export const Tags: React.FC<TagsProps> = ({ tags, withButton = false }) => {
  const [checked, setChecked] = React.useState<number[]>([]);

  const hadleTag = (index: number) => {
    setChecked((prev) => {
      if (checked.includes(index)) {
        return prev.filter((elem) => elem !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  if (!tags) {
    return null;
  }

  return (
    <>
      {tags.map((tag, index) => (
        <Paper
          style={{ marginBottom: 13, color: '#000000' }}
          display={'inline-block'}
          key={tag.id}
          height={23}
          onClick={() => hadleTag(index)}
          className="tag__wrapper"
          customBgColor={checked.includes(index) ? tag.bg : 'EBEBEB'}>
          {tag.name}
        </Paper>
      ))}
      {withButton && (
        <Button width={84} height={23} variant={'primary'}>
          Другие...
        </Button>
      )}
    </>
  );
};
