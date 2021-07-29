import { ImageComponent, Title } from 'byh-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneFullByIdNews, setOneFullByIdNews } from '../../../Store/ducks/news/newsReducer';
import { getFullNews } from '../../../Store/ducks/news/newsSelector';
import './NewsPage.scss';
export const NewsPage = () => {
  const params: { newsId: string } = useParams();
  const dispatch = useDispatch();
  const newsId = params.newsId;
  const news = useSelector(getFullNews);

  React.useEffect(() => {
    dispatch(fetchOneFullByIdNews(newsId));

    return () => {
      dispatch(setOneFullByIdNews(null));
    };
  }, [dispatch, newsId]);

  if (!news) {
    return null;
  }

  return (
    <div className="fullNewsPage__wrapper">
      <Title style={{ marginBottom: 20 }} variant="primary" type="medium">
        {news.title}
      </Title>
      <ImageComponent style={{ marginBottom: 20 }} height={400} width={1170} src={news.img[0]} />
      <p className="fullNewsPage__content-text"> {news.description} </p>
      {news.img[1] && <ImageComponent height={400} width={1170} src={news.img[1]} />}
    </div>
  );
};
