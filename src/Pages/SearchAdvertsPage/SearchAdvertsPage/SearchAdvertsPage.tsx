import { Paginator, Title } from 'byh-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { BigAdvertPreview } from '../../../Components/BigAdvertPreview';
import { getSearchData } from '../../../Store/ducks/searchCar/searchCarSelector';
import './SearchAdvertsPage.scss';
export const SearchAdvertsPage = () => {
  const adverts = useSelector(getSearchData);
  if (!adverts) {
    return null;
  }
  return (
    <div>
      <Title variant="primary" type={'medium'}>
        Найденные варианты
      </Title>
      {adverts.map((advert) => (
        <div key={advert.id} style={{ marginBottom: 20 }}>
          <BigAdvertPreview advertId={advert.id} car={advert.item} />
        </div>
      ))}
      <div className="searchAdvertPage__paginator-wrapper">
        <Paginator currentPage={1} allPagesCount={1} />
      </div>
    </div>
  );
};
