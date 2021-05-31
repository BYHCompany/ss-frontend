import { Button, ImageComponent, Paper, Title } from 'byh-components';
import React from 'react';
import { FaChargingStation } from 'react-icons/fa';
import { AiOutlineStock } from 'react-icons/ai';
import './AdvertPreview.scss';
import { advertDataType } from '../../../assets/advertPreviewData';

interface AdvertPreviewProps {
  advertData: advertDataType[];
}

export const AdvertPreview: React.FC<AdvertPreviewProps> = ({ advertData }) => {
  return (
    <>
      {advertData.map((item) => (
        <Paper key={item.id} className="advert__wrapper" width={350}>
          <Title text={item.title} type={'ultraSmall'} />
          <ImageComponent src={item.photo} height={144} width={310} />
          <p style={{ margin: '6px 0', fontWeight: 'bold' }}>{item.year} год</p>
          <div className="advert-action__wrapper">
            <div className="advert-icons__wrapper">
              {item.isElectric && (
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
              {item.isInTrending && (
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
              shadow={false}
              customBgColor={'#072832'}
              height={35}
              width={158}>
              <Title text={item.price} variant="secondary" type="ultraSmall" />
            </Paper>
          </div>
        </Paper>
      ))}
    </>
  );
};
