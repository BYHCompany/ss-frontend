import { Button, ImageComponent, Paper, Title } from 'byh-components';
import React from 'react';
import { TopicPreviewProps } from './TopicPreviewTypes';
import './TopicPreview.scss';
import { AiFillFire } from 'react-icons/ai';
import { ReactComponent as ElectricCar } from '../../../assets/img/icons/electric_car.svg';

export const TopicPreview: React.FC<TopicPreviewProps> = ({
  imageSrc,
  description,
  label,
  mainTag,
  tags,
}) => {
  return (
    <Paper display={'flex'} className="topickPreview__wrapper">
      <ImageComponent width={447} height={340} style={{ marginRight: '15px' }} src={imageSrc} />
      <div className="topicPreview__contentWrapper">
        <div className="topicPreview__titleAndTag">
          <Title type="small" className="topicPreview__label" text={label} variant="primary" />
          {mainTag && (
            <Button
              tag
              height={45}
              width={45}
              startIcon={<ElectricCar />}
              customBgColor="#00A3FF"
              variant="primary"
            />
          )}
        </div>
        <p className="topicPreview__description">{description}</p>
        <div className="topicPreview__tagsAndButoon">
          <div className="topicPreview__tags">
            {tags.map((tag) => {
              return (
                <Button
                  fontSize={14}
                  width={200}
                  height={28}
                  variant="primary"
                  label={tag.label}
                  paddingHorizontal={10}
                  paddingVertical={5}
                  style={{ marginRight: '10px' }}
                  customBgColor="#FFAB7B"
                  startIcon={<AiFillFire />}
                  accurateValues
                />
              );
            })}
          </div>
          <Button width={160} height={40} variant="primary" label="Читать далее" />
        </div>
      </div>
    </Paper>
  );
};
