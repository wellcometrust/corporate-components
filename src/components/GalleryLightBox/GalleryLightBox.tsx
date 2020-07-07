import React, { useContext, useState } from 'react';
import cx from 'classnames';
import { useHotkeys } from 'react-hotkeys-hook';
import shortid from 'shortid';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';

import Button from 'Button';
import Icon from 'Icon';
import ImageElement from 'Image/ImageElement';
import SocialShare from 'SocialShare';
import Text from 'Text';

import ViewportContext from 'ViewportContext/ViewportContext';

type GalleryLightBoxProps = {
  galleryId?: number;
  handleClose: () => void;
  handleBack: (galleryId: number, index: number) => void;
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
   * Because we want to set the initial info pane state differently dependent
   * on the browser width.
   *
   * #6673 TODO: Add useEffect hook to handle browser width changing,
   * therefore requiring us to set the infoPane to visible by default (probably
   * provding the user hasn't already touched it...)
   */
  const { isMobile } = useContext(ViewportContext);
  const initialInfoPaneVisibility = !isMobile;

  const [isInfoPaneVisible, setIsInfoPaneVisible] = useState(
    initialInfoPaneVisibility
  );

  const toggleInfoPane = () => {
    setIsInfoPaneVisible(!isInfoPaneVisible);
  };

  const infoPaneClassNames = {
    main: cx('cc-gallery-lightbox__info-pane', {
      'cc-gallery-lightbox__info-pane--hidden': !isInfoPaneVisible
    }),
    toggle: cx('cc-gallery-lightbox__slide-actions-toggle', {
      'cc-gallery-lightbox__slide-actions-toggle--is-active': isInfoPaneVisible
    })
  };

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
          {slides.map((slide: GalleryLightBoxSlideProps, index: number) => {
            const srcSet = `${slide.mediaSources.gallery_full} 769w, ${slide.mediaSources.gallery_full_hi} 1538w`;
            const infoPaneContent = slide.title
              ? `<h2 className="cc-gallery-lightbox__info-title">${slide.title}</h2>${slide.caption}`
              : slide.caption;

            return (
              <Slide
                className="cc-gallery-lightbox__slide"
                index={index}
                innerClassName="cc-gallery-lightbox__slide-layout"
                innerTag="figure"
                key={shortid.generate()}
              >
                <div className="cc-gallery-lightbox__image-pane">
                  <div className="cc-gallery-lightbox__image-pane-stage">
                    <ImageElement
                      alt={slide.alt}
                      sizes="100vw"
                      src={slide.mediaSources.gallery_full}
                      srcSet={srcSet}
                    />
                  </div>
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
                          {`${index + 1} / ${slides.length}`}
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
                        href={slide.src}
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
                  <SocialShare
                    body={infoPaneContent}
                    hasCopyLink
                    title={slide.title}
                    url={window?.location.href}
                  />
                </div>
                <figcaption className={infoPaneClassNames.main}>
                  <Text variant="text-snippet">{infoPaneContent}</Text>
                </figcaption>
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </dialog>
  );
};

export default GalleryLightBox;
