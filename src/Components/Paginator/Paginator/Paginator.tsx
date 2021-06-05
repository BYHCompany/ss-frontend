import { Button } from 'byh-components';
import React, { useEffect } from 'react';
import './Paginator.scss';
import { PaginatorProps } from './PaginatorTypes';

export const Paginator: React.FC<PaginatorProps> = ({
  allPagesCount,
  currentPage,
  callback,
}): React.ReactElement => {
  const pagesPack = 10;
  const packageCount = allPagesCount / pagesPack;
  const [currentPackage, setCurrentPackage] = React.useState(6);
  let startPos = pagesPack * currentPackage - 1;
  let endPos = pagesPack * (currentPackage + 1);
  const [currentPageIndex, setCurrentPageIndex] = React.useState(currentPage);

  if (endPos - currentPageIndex === 0) {
    if (currentPageIndex < allPagesCount) {
      setCurrentPackage((prev) => {
        return prev + 1;
      });
    }
  }

  if (endPos - currentPageIndex === pagesPack + 1) {
    setCurrentPackage((prev) => {
      return prev - 1;
    });
  }

  let pagesArray: number[] = [];

  const rebuildArray = () => {
    for (let i = startPos; i <= endPos; i++) {
      pagesArray.push(i);
    }
  };

  useEffect(() => {
    rebuildArray();
    callback(currentPageIndex);
  }, [startPos, endPos, currentPackage]);

  rebuildArray();

  const clickHandler = (index: number) => {
    callback(index);
    setCurrentPageIndex(index);
  };

  const renderButton = (args: any, index: number) => (
    <Button
      key={index}
      fontSize={24}
      height={50}
      width={50}
      {...args}
      onClick={() => clickHandler(index)}
    />
  );

  const renderLastButton = () => {
    if (allPagesCount === currentPageIndex) {
      return renderButton({ label: allPagesCount.toString(), variant: 'primary' }, allPagesCount);
    }
    return renderButton({ label: allPagesCount.toString() }, allPagesCount);
  };

  return (
    <div className="paginator__wrapper">
      {pagesArray.map((item) => {
        if (item === currentPageIndex) {
          return renderButton({ label: item, variant: 'primary' }, item);
        }
        return renderButton({ label: item }, item);
      })}
      <p className="paginator__separator">...</p>
      {renderLastButton()}
    </div>
  );
};
