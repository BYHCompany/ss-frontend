import { Button, ImageComponent, Paper, Title } from 'byh-components';
import React from 'react';
import { FaChargingStation } from 'react-icons/fa';
import { AiOutlineStock } from 'react-icons/ai';
import './AdvertPreview.scss';

export type AdvertDataType = {
  id: string;
  title: string;
  photo: string;
  year: string;
  isElectric?: boolean;
  isInTrending?: boolean;
  price: string;
};

export const AdvertPreview: React.FC<AdvertDataType> = ({
  id,
  title,
  photo,
  year,
  isElectric,
  isInTrending,
  price,
}) => {
  return (
    <>
      <Paper display="flex" key={id} className="advert__wrapper" width={350}>
        <Title type={'ultraSmall'}>{title}</Title>
        <ImageComponent src={photo} height={144} width={310} />
        <p style={{ margin: '6px 0', fontWeight: 'bold' }}>{year} год</p>
        <div className="advert-preview__action-wrapper">
          <div className="advert-icons__wrapper">
            {isElectric && (
              <Button
                tag
                startIcon={<FaChargingStation />}
                customBgColor={'#00A3FF'}
                customFontColor={'#fff'}
                fontSize={24}
                height={35}
                width={35}
              />
            )}
            {isInTrending && (
              <Button
                height={35}
                width={35}
                tag
                startIcon={<AiOutlineStock />}
                fontSize={24}
                customBgColor={'#4FFFAA'}
                customFontColor={'#fff'}
              />
            )}
          </div>
          <Paper
            className="advert-price_wrapper"
            display="flex"
            shadow={false}
            customBgColor={'#072832'}
            height={35}
            width={158}>
            <Title variant="secondary" type="ultraSmall">
              {price}
            </Title>
          </Paper>
        </div>
      </Paper>
    </>
  );
};
