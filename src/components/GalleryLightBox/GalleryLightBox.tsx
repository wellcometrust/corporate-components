import React, { MouseEventHandler, useState, useContext } from 'react';
import cx from 'classnames';
import { useHotkeys } from 'react-hotkeys-hook';
import shortid from 'shortid';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider
} from 'pure-react-carousel';

import Button from 'Button';
import Icon from 'Icon';
import ImageElement from 'Image/ImageElement';
import Text from 'Text';

import ViewportContext from 'ViewportContext/ViewportContext';

type GalleryLightBoxProps = {
  galleryId?: number;
  handleBack: (galleryId: number, index: number) => void;
  handleClose: () => void;
  handleNext: (galleryId: number, index: number) => void;
  isOpen?: boolean;
  openAtSlideIndex?: number;
  slides: GalleryLightBoxSlideProps[];
};

type GalleryLightBoxSlideProps = {
  alt?: string;
  caption: string;
  credit?: string;
  fileSize: number;
  license?: string;
  mediaSources: {
    gallery_full: string;
    gallery_full_hi: string;
    gallery_full_mobile: string;
    gallery_full_mobile_hi: string;
  };
  src?: string;
  title?: string;
};

type TransformWrapperProps = {
  zoomIn: MouseEventHandler;
  zoomOut: MouseEventHandler;
  resetTransform: MouseEventHandler;
};

const GalleryLightBoxSlide = ({
  galleryId,
  handleBack,
  handleClose,
  handleNext,
  slide,
  index,
  slideCount
}: {
  galleryId?: number;
  handleBack: (galleryId: number, index: number) => void;
  handleClose: () => void;
  handleNext: (galleryId: number, index: number) => void;
  slide: GalleryLightBoxSlideProps;
  index: number;
  slideCount: number;
}) => {
  const { isMobile } = useContext(ViewportContext);
  const initialInfoPaneVisibility = true;

  const [isInfoPaneVisible, setIsInfoPaneVisible] = useState(
    initialInfoPaneVisibility
  );

  const toggleInfoPane = () => {
    setIsInfoPaneVisible(!isInfoPaneVisible);
  };

  const srcSet = `${slide.mediaSources.gallery_full} 769w, ${slide.mediaSources.gallery_full_hi} 1538w`;
  const infoPaneContent = slide.title
    ? `<h2 class="cc-gallery-lightbox__info-title">${slide.title}</h2>${slide.caption}`
    : slide.caption;

  const infoPaneClassNames = {
    main: cx('cc-gallery-lightbox__info-pane', {
      'cc-gallery-lightbox__info-pane--hidden': !isInfoPaneVisible
    }),
    toggle: cx('cc-gallery-lightbox__slide-actions-toggle', {
      'cc-gallery-lightbox__slide-actions-toggle--is-active': isInfoPaneVisible
    })
  };

  return (
    <Slide
      className="cc-gallery-lightbox__slide"
      index={index}
      innerClassName="cc-gallery-lightbox__slide-layout"
      innerTag="figure"
    >
      <div className="cc-gallery-lightbox__image-pane">
        <TransformWrapper
          wheel={{
            wheelEnabled: false
          }}
        >
          {({
            zoomIn,
            zoomOut,
            resetTransform,
            ...rest
          }: TransformWrapperProps) => (
            <>
              <div className="tools">
                <Button onClick={zoomIn} variant="primary">
                  +
                </Button>
                <Button onClick={zoomOut} variant="primary">
                  -
                </Button>
                <Button onClick={resetTransform} variant="primary">
                  x
                </Button>
              </div>
              <div className="cc-gallery-lightbox__image-pane-stage">
                <TransformComponent>
                  <ImageElement
                    className="cc-gallery-lightbox__image"
                    alt={slide.alt}
                    sizes="100vw"
                    src={slide.mediaSources.gallery_full}
                    srcSet={srcSet}
                  />
                </TransformComponent>
              </div>
            </>
          )}
        </TransformWrapper>
        <span className="cc-gallery-lightbox__image-pane-tray">
          <div className="cc-gallery-lightbox__slide-actions">
            <div className="cc-gallery-lightbox__nav">
              <ButtonBack
                className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--back u-color-inherit"
                onClick={() => handleBack(galleryId, index)}
              >
                <Icon name="arrow" />
              </ButtonBack>
              <span className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--count">
                {`${index + 1} / ${slideCount}`}
              </span>
              <ButtonNext
                className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--next u-color-inherit"
                onClick={() => handleNext(galleryId, index)}
              >
                <Icon name="arrow" />
              </ButtonNext>
            </div>
            <Button
              className={infoPaneClassNames.toggle}
              icon="chevronThin"
              iconPlacementSwitch
              onClick={toggleInfoPane}
              role="button"
              variant="unstyled"
            >
              {isInfoPaneVisible ? `Hide` : `Show`} info
            </Button>
          </div>
          {!!(slide.credit || slide.license) && (
            <dl className="cc-gallery-lightbox__meta">
              {slide.credit && (
                <span className="cc-gallery-lightbox__meta-item">
                  <dt className="cc-gallery-lightbox__meta-item-label">
                    Image credit:{' '}
                  </dt>
                  <dd
                    className="cc-gallery-lightbox__meta-item-text"
                    dangerouslySetInnerHTML={{ __html: slide.credit }}
                  />
                </span>
              )}
              {slide.license && (
                <span className="cc-gallery-lightbox__meta-item">
                  <dt className="cc-gallery-lightbox__meta-item-label">
                    Image license:{' '}
                  </dt>
                  <dd className="cc-gallery-lightbox__meta-item-text">
                    {slide.license}
                  </dd>
                </span>
              )}
            </dl>
          )}
          <span className="cc-gallery-lightbox__download">
            <a
              href={slide.mediaSources.gallery_full_hi}
              download
              className="cc-gallery-lightbox__download-link u-color-inherit"
            >
              <span className="cc-gallery-lightbox__download-icon">
                <Icon name="download" />
              </span>
              Download
            </a>
            <span className="cc-gallery-lightbox__download-filesize">
              {`[${(slide.fileSize / (1024 * 1024)).toFixed(2)} MB]`}
            </span>
          </span>
        </span>
      </div>
      <figcaption className={infoPaneClassNames.main}>
        <Text variant="text-snippet">{infoPaneContent}</Text>
      </figcaption>
    </Slide>
  );
};

export const GalleryLightBox = ({
  galleryId,
  handleBack,
  handleClose,
  handleNext,
  isOpen,
  openAtSlideIndex = 0,
  slides
}: GalleryLightBoxProps) => {
  /**
   * Use react-hot-keys hook to detect user clicking 'escape'
   * to close the lightbox.
   */
  useHotkeys('esc', () => {
    handleClose();
  });

  return (
    <dialog className="cc-gallery-lightbox" open={isOpen}>
      <CarouselProvider
        className="cc-gallery-lightbox__carousel"
        currentSlide={openAtSlideIndex}
        dragEnabled={false}
        isIntrinsicHeight
        naturalSlideWidth={16}
        naturalSlideHeight={9}
        totalSlides={slides.length}
      >
        <Button
          autoFocus
          className="cc-gallery-lightbox__close"
          onClick={handleClose}
          role="button"
          variant="unstyled"
        >
          <Icon name="closeBold" />
        </Button>
        <Slider
          className="cc-gallery-lightbox__slider"
          classNameTray="cc-gallery-lightbox__slider-tray"
          classNameTrayWrap="cc-gallery-lightbox__slider-tray-wrap"
        >
          {slides.map((slide: GalleryLightBoxSlideProps, index: number) => (
            <GalleryLightBoxSlide
              key={shortid.generate()}
              galleryId={galleryId}
              handleBack={handleBack}
              handleClose={handleClose}
              handleNext={handleNext}
              index={index}
              slide={slide}
              slideCount={slides.length}
            />
          ))}
        </Slider>
      </CarouselProvider>
    </dialog>
  );
};

export default GalleryLightBox;
