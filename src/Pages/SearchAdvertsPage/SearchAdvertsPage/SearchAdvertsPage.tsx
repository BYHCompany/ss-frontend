import { Paginator, Title } from 'byh-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BigAdvertPreview } from '../../../Components/BigAdvertPreview';
import { CarSelectorForm } from '../../../Components/CarSelectForm';
import queryString from 'query-string';
import { getSearchData } from '../../../Store/ducks/searchCar/searchCarSelector';
import './SearchAdvertsPage.scss';
import { fetchSearchData, setSearchedData } from '../../../Store/ducks/searchCar/searchCarReducer';
export const SearchAdvertsPage = () => {
  const adverts = useSelector(getSearchData);
  const { search } = useLocation();
  const dispatch = useDispatch();
  const queryData = queryString.parse(search);

  React.useEffect(() => {
    if (!adverts) {
      dispatch(fetchSearchData({ ...queryData }));
    }
  }, [queryData, dispatch, adverts]);
  React.useEffect(() => {
    return () => {
      dispatch(setSearchedData(null));
    };
  }, [dispatch]);
  return (
    <div>
      <CarSelectorForm />
      <Title variant="primary" type={'medium'}>
        Найденные варианты
      </Title>

      <div className="searchAdvert__advert-wrapper">
        {adverts?.map((advert) => (
          <BigAdvertPreview key={advert.id} advertId={advert.id} car={advert.item} />
        ))}
      </div>

      <div className="searchAdvertPage__paginator-wrapper">
        <Paginator currentPage={2} allPagesCount={2} />
      </div>
    </div>
  );
};
