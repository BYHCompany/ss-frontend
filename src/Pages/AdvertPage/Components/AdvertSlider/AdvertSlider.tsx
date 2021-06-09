import React from 'react';
import { ImageComponent } from 'byh-components';
import './AdvertSlider.scss';
const imageArr = [
  { image: 'https://kursors.lv/wp-content/uploads/2019/09/2020-porsche-taycan.jpg' },
  {
    image:
      'https://files.porsche.com/filestore/news/international-de/none/559051/headimage15/6e58f0c2-cf1c-11e9-80c5-005056bbdc38/World-premiere-of-the-Porsche-Taycan-Sports-car%2C-sustainably-redesigned.jpg',
  },
  {
    image:
      'https://baltic-grlk5lagedl.stackpathdns.com/production/baltic/images/1568109024498373-high_taycan_turbo_2019_porsche_ag_1.jpg?w=1920&h=800&fit=fill&crop=faces&auto=%5B%22format%22%2C%20%22compress%22%5D&cs=srgb',
  },
  {
    image:
      'http://i-auto.lv/uploads/posts/2020-04/1585970549_gf-jiei-m27c-1v7n_wnetrze-nowego-porsche-taycan-1920x1080-nocrop.jpg',
  },
  { image: 'https://kursors.lv/wp-content/uploads/2019/09/2020-porsche-taycan.jpg' },
  { image: 'https://kursors.lv/wp-content/uploads/2019/09/2020-porsche-taycan.jpg' },
  { image: 'https://kursors.lv/wp-content/uploads/2019/09/2020-porsche-taycan.jpg' },
  { image: 'https://kursors.lv/wp-content/uploads/2019/09/2020-porsche-taycan.jpg' },
  { image: 'https://kursors.lv/wp-content/uploads/2019/09/2020-porsche-taycan.jpg' },
  { image: 'https://kursors.lv/wp-content/uploads/2019/09/2020-porsche-taycan.jpg' },
  { image: 'https://kursors.lv/wp-content/uploads/2019/09/2020-porsche-taycan.jpg' },
];

export const AdvertSlider = () => {
  const [mainPhoto, setMainPhoto] = React.useState('');
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const length = imageArr.length;
  const firstImage = imageArr[0].image;

  const setMainPhotoHandler = (img: string) => {
    setMainPhoto(img);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide - 1);
  };
  return (
    <div className="advert-slider__wrapper">
      <div>
        <div className="advert-slider__next-prev__buttons">
          {currentSlide === 0 ? (
            <div
              className="advert-slider__next__button"
              style={{ width: '100%' }}
              onClick={nextSlide}
            />
          ) : (
            <>
              <div className="advert-slider__prev__button" onClick={prevSlide} />
              <div className="advert-slider__next__button" onClick={nextSlide} />
            </>
          )}
        </div>
        <ImageComponent
          src={mainPhoto ? mainPhoto : firstImage}
          width={770}
          height={380}
          style={{ marginBottom: 20 }}
        />
      </div>
      <div className="advert-slider__small-wrapper">
        {imageArr.map(({ image }, index) => {
          if (index === 4) {
            if (length === 5) {
              return (
                <ImageComponent
                  key={index}
                  onClick={() => setMainPhotoHandler(image)}
                  height={76}
                  width={150}
                  src={image}
                />
              );
            } else {
              return (
                <div key={index}>
                  <div className="advert-slider__image_text">
                    <p>+{length - 4} фото</p>
                  </div>
                  <div className="advert-slider__image-for-more">
                    <ImageComponent
                      key={index}
                      onClick={() => setMainPhotoHandler(image)}
                      height={76}
                      width={150}
                      src={image}
                    />
                  </div>
                </div>
              );
            }
          }

          if (index > 4) {
            return null;
          }
          return (
            <ImageComponent
              key={index}
              onClick={() => setMainPhotoHandler(image)}
              height={76}
              width={150}
              src={image}
            />
          );
        })}
      </div>
    </div>
  );
};
