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
  const [currentPageIndex, setCurrentPageIndex] = React.useState(currentPage);

  const parseCurrent = (): number => {
    if (currentPage <= pagesPack) {
      return 0
    }

    if (currentPageIndex > allPagesCount) {
      throw new Error('No current page')
    }

    const arr = currentPage.toString().split('')
    arr.pop()
    const mappedArr = arr.map(Number).join('')
    return parseInt(mappedArr)
  }

  const [currentPackage, setCurrentPackage] = React.useState<number>(parseCurrent());
  let startPos = pagesPack * currentPackage - 1;
  let endPos = pagesPack * (currentPackage + 1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let pagesArray: number[] = [];

  //Next step
  if (endPos - currentPageIndex === 0) {
    if (currentPageIndex < allPagesCount) {
      setCurrentPackage((prev) => {
        return prev + 1;
      });
    }
  }

  //Prev step
  if (endPos - currentPageIndex === pagesPack + 1) {
    if(currentPackage !== 0) {
      setCurrentPackage((prev) => {
        return prev - 1;
      });
    }
  }

  const rebuildArray = React.useCallback(() => {
    for (let i = startPos; i <= endPos; i++) {
      pagesArray.push(i);
    }
  }, [pagesArray, startPos, endPos]);

  if (currentPackage === 0) {
    startPos = 1
  }

  useEffect(() => {
    rebuildArray();
    callback && callback(currentPageIndex);
  }, [startPos, endPos, currentPackage, callback, rebuildArray, currentPageIndex]);

  rebuildArray();

  const clickHandler = (index: number) => {
    callback && callback(index);
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

  return (
    <div className="paginator__wrapper">
      {pagesArray.map((item) => {
        if (item === currentPageIndex) {
          return renderButton({ label: item, variant: 'primary' }, item);
        }
        return renderButton({ label: item }, item);
      })}
    </div>
  );
};