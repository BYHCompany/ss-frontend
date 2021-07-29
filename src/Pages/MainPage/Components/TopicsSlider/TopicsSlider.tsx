import React from 'react';
import { Title } from 'byh-components';
import './TopicSlider.scss';
import { CgShapeRhombus } from 'react-icons/cg';
import { TopicPreview } from '../../../../Components/TopicPreview';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getShortNews } from '../../../../Store/ducks/news/newsSelector';
import {
  fetchLastTenShortNews,
  setLastTenShortNews,
} from '../../../../Store/ducks/news/newsReducer';
import { newsType } from '../../../../Store/ducks/news/@types';

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

export const TopicsSlider = () => {
  const { t } = useTranslation();
  const news = useSelector(getShortNews);
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const dispatch = useDispatch();
  const allNav = 5;
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (currentSlide <= allNav - 2) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 15000);

    return () => clearInterval(timer);
  }, [currentSlide, allNav]);

  React.useEffect(() => {
    dispatch(fetchLastTenShortNews());

    return () => {
      dispatch(setLastTenShortNews(null));
    };
  }, [dispatch]);

  if (!news) {
    return null;
  }
  // const length = news.length;
  // const allNav = Math.round(length / 2);
  const navCount = [];

  for (let i = 0; i < allNav; i++) {
    navCount.push(i);
  }
  const arr: any = [];
  let i,
    j,
    temparray,
    chunk = 2;
  for (i = 0, j = news.length; i < j; i += chunk) {
    temparray = news.slice(i, i + chunk);
    arr.push(temparray);
  }

  return (
    <div data-testid="TopicsSlider-wrapper">
      <Title style={{ marginBottom: 20 }} variant="primary" type="medium">
        {t('mainPage:news')}
      </Title>
      <div>
        {arr.map((topic: any, index: number) => {
          if (index === currentSlide) {
            return (
              <motion.div
                key={index}
                className={'active__slider'}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.2 },
                }}>
                {topic.map((topic: newsType, index: any) => {
                  return (
                    <React.Fragment key={index}>
                      <TopicPreview
                        topicId={topic.id}
                        description={topic.shortDescription}
                        imageSrc={topic.img}
                        label={topic.title}
                        tags={topic.tags}
                      />
                    </React.Fragment>
                  );
                })}
              </motion.div>
            );
          }
          return null;
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {navCount.map((_, index) => {
          return (
            <CgShapeRhombus
              onClick={() => setCurrentSlide(index)}
              className={
                index === currentSlide
                  ? 'topic-slider__rhombus-active'
                  : 'topic-slider__rhombus-default'
              }
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
