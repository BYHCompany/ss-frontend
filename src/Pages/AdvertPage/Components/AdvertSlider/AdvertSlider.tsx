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
    image: 'https://kursors.lv/wp-content/uploads/2019/09/2020-porsche-taycan.jpg',
  },
  {
    image:
      'https://evcompare.io/upload/resize_cache/iblock/ad8/1200_800_2/ad8a05faabd7c44bfd43a7e8d3a1a949.jpg',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5yce05MQDRoQ91WmYy-nv1KvuPE1LYzyrQ&usqp=CAU',
  },
  { image: 'https://a.d-cd.net/zMAAAgJrbeA-960.jpg' },
  {
    image:
      'https://cdn.motor1.com/images/mgl/N096n/s1/porsche-taycan-cross-turismo-2020-render-de-motor1-com.jpg',
  },
  { image: 'https://img-c.drive.ru/models.photos/0000/000/000/001/6a6/48d782e5ccc72789-large.jpg' },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGXrLZ5R2RxgdAKJxrF1mjPRrcEHw76MEAg&usqp=CAU',
  },
  {
    image:
      'https://cdn.elferspot.com/wp-content/uploads/2020/11/Porsche-Taycan-Turbo-S-kaufen-Deutschland-17-2000x1334.jpg',
  },
];

export const AdvertSlider = () => {
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const length = imageArr.length;
  let selectedImg = imageArr[photoIndex].image;
  const firstImage = imageArr[0].image;
  const setMainPhotoHandler = (index: number) => {
    setPhotoIndex(index);
  };

  const nextSlide = () => {
    setPhotoIndex(photoIndex === length - 1 ? 0 : photoIndex + 1);
  };
  const prevSlide = () => {
    setPhotoIndex(photoIndex === 0 ? length - 1 : photoIndex - 1);
  };

  return (
    <div className="advert-slider__wrapper">
      <div>
        <div className="advert-slider__next-prev__buttons">
          <div className="advert-slider__prev__button" onClick={prevSlide} />
          <div className="advert-slider__next__button" onClick={nextSlide} />
        </div>
        <ImageComponent
          src={selectedImg ? selectedImg : firstImage}
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
                  onClick={() => setMainPhotoHandler(index)}
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
                      onClick={() => setMainPhotoHandler(index)}
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
              onClick={() => setMainPhotoHandler(index)}
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
