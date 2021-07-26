import { Paginator, Title } from 'byh-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { BigAdvertPreview } from '../../../Components/BigAdvertPreview';
import { CarSelectorForm } from '../../../Components/CarSelectForm';

import { getSearchData } from '../../../Store/ducks/searchCar/searchCarSelector';
import './SearchAdvertsPage.scss';
export const SearchAdvertsPage = () => {
  const adverts = useSelector(getSearchData);

  if (!adverts) {
    return null;
  }
  return (
    <div>
      <CarSelectorForm />
      <Title variant="primary" type={'medium'}>
        Найденные варианты
      </Title>

      <div className="searchAdvert__advert-wrapper">
        {adverts.map((advert) => (
          <BigAdvertPreview key={advert.id} advertId={advert.id} car={advert.item} />
        ))}
      </div>

      <div className="searchAdvertPage__paginator-wrapper">
        <Paginator currentPage={2} allPagesCount={2} />
      </div>
    </div>
  );
};
