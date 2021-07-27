import React from 'react';
import { ImageComponent } from 'byh-components';
import './AdvertSlider.scss';
import { useSelector } from 'react-redux';
import { getAdvertImages } from '../../../../Store/ducks/advert/advertSelector';
import { AnimatePresence, motion } from 'framer-motion';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

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

export const AdvertSlider = () => {
  const imageArr = useSelector(getAdvertImages);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  if (!imageArr) {
    return null;
  }

  const length = imageArr.length;
  let selectedImg = imageArr[photoIndex].photo;
  const firstImage = imageArr[0].photo;
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
          <div className="advert-slider__prev__button" onClick={prevSlide}>
            <MdKeyboardArrowLeft />
          </div>
          <div className="advert-slider__next__button" onClick={nextSlide}>
            <MdKeyboardArrowRight />
          </div>
        </div>

        <motion.div
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          key={selectedImg}
          transition={{
            opacity: { duration: 0.3 },
          }}>
          <ImageComponent
            src={selectedImg ? selectedImg : firstImage}
            width={770}
            height={380}
            style={{ marginBottom: 20 }}
          />
        </motion.div>
      </div>
      <div className="advert-slider__small-wrapper">
        {imageArr.map(({ photo }, index) => {
          if (index === 4) {
            if (length === 5) {
              return (
                <ImageComponent
                  key={index}
                  onClick={() => setMainPhotoHandler(index)}
                  height={76}
                  width={150}
                  src={photo}
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
                      src={photo}
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
              src={photo}
            />
          );
        })}
      </div>
    </div>
  );
};
