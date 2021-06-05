import { Button } from 'byh-components';
import React from 'react';
import './Paginator.scss';
import { PaginatorProps } from './PaginatorTypes';

export const Paginator: React.FC<PaginatorProps> = ({
  allPagesCount = 20,
  currentPage = 3,
}): React.ReactElement => {
  const [currentPageIndex, setCurrentPageIndex] = React.useState(currentPage);

  const renderButton = (args: any) => <Button fontSize={24} height={50} width={50} {...args} />;

  return (
    <div className="paginator__wrapper">
      {currentPage >= 3 && (
        <>
          {renderButton({ label: (currentPageIndex - 2).toString() })}
          {renderButton({ label: (currentPageIndex - 1).toString() })}
          {renderButton({ label: currentPageIndex.toString() })}
          {renderButton({ label: (currentPageIndex + 1).toString() })}
          {renderButton({ label: (currentPageIndex + 2).toString() })}
        </>
      )}
      {currentPage >= 1 && currentPage < 3 && (
        <>
          {renderButton({ label: currentPageIndex.toString() })}
          {renderButton({ label: (currentPageIndex + 1).toString() })}
          {renderButton({ label: (currentPageIndex + 2).toString() })}
          {renderButton({ label: (currentPageIndex + 3).toString() })}
          {renderButton({ label: (currentPageIndex + 4).toString() })}
        </>
      )}
      <p className="paginator__separator">...</p>
      <Button fontSize={24} height={50} width={50} label={allPagesCount.toString()} />
    </div>
  );
};
