import { Button } from 'byh-components';
import React from 'react';
import './Paginator.scss';
import { PaginatorProps } from './PaginatorTypes';

export const Paginator: React.FC<PaginatorProps> = ({
  allPagesCount,
  currentPage,
}): React.ReactElement => {
  const [currentPageIndex, setCurrentPageIndex] = React.useState(currentPage);
  const pagesArray = []
  for (let i = 0; i < allPagesCount; i++) {
    pagesArray.push(i)
  }
  const renderButton = (args: any) => <Button fontSize={24} height={50} width={50} {...args} />;

  return (
    <div className="paginator__wrapper">
      pagesArray.map((item) => {
        renderButton()
      })
      <p className="paginator__separator">...</p>
      <Button fontSize={24} height={50} width={50} label={allPagesCount.toString()} />
    </div>
  );
};
