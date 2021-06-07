import React from 'react';
import { Title } from 'byh-components';
import { TopicPreview } from '../../../../../Components/TopicPreview/TopicPreview/TopicPreview';
import './TopicSlider.scss';
import { topicSliderData } from '../../../../../assets/topicData';
import { CgShapeRhombus } from 'react-icons/cg';

export const TopicsSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const length = topicSliderData.length;
  const allNav = Math.round(length / 2);
  const navCount = [];

  for (let i = 0; i < allNav; i++) {
    navCount.push(i);
  }

  return (
    <div>
      <Title style={{ marginBottom: 20 }} text="Новости" variant="primary" type="large" />
      <div className="topic-slider__topic-review__wrapper">
        {topicSliderData.map((topic, index) => {
          return (
            <div
              key={index}
              className={index === currentSlide ? 'active__slider' : 'not-active__slider'}>
              <TopicPreview
                description={topic.description}
                imageSrc={topic.imageSrc}
                label={topic.label}
                mainTag={topic.mainTag}
                tags={topic.tags}
              />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {navCount.map((nav, index) => {
          return (
            <CgShapeRhombus
              onClick={() => setCurrentSlide(index)}
              className={index === currentSlide ? 'active' : ''}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
