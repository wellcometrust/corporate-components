import React, { useState, useContext } from 'react';
import cx from 'classnames';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';

import ImageElement from 'Image/ImageElement';
import Icon from 'Icon';
import Button from 'Button';

import ViewportContext from 'ViewportContext/ViewportContext';

type GalleryLightBoxProps = {
  isOpen?: boolean;
  slides: GalleryLightBoxSlideProps[];
};

type GalleryLightBoxSlideProps = {
  alt?: string;
  caption: string;
  credit?: string;
  fileSize: number;
  license?: string;
  src: string;
};

type GalleryLightBoxNavProps = {
  slideCount: number;
  currentSlide: number;
};

const GalleryLightBoxNav = ({
  slideCount,
  currentSlide
}: GalleryLightBoxNavProps) => (
  <div className="cc-gallery-lightbox__nav">
    <ButtonBack className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--back u-color-inherit">
      <Icon name="arrow" />
    </ButtonBack>
    <span className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--count">
      {`${currentSlide} / ${slideCount}`}
    </span>
    <ButtonNext className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--next u-color-inherit">
      <Icon name="arrow" />
    </ButtonNext>
  </div>
);

export const GalleryLightBox = ({ slides, isOpen }: GalleryLightBoxProps) => {
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
    pane: cx('cc-gallery-lightbox__info-pane', {
      'cc-gallery-lightbox__info-pane--hidden': !isInfoPaneVisible
    }),
    toggle: cx('cc-gallery-lightbox__slide-actions-toggle', {
      'cc-gallery-lightbox__slide-actions-toggle--is-active': isInfoPaneVisible
    })
  };

  return (
    <dialog className="cc-gallery-lightbox" open={isOpen}>
      <CarouselProvider
        className="cc-gallery-lightbox__carousel"
        dragEnabled={false}
        naturalSlideWidth={16}
        naturalSlideHeight={9}
        totalSlides={slides.length}
      >
        <Slider
          className="cc-gallery-lightbox__slider"
          classNameTray="cc-gallery-lightbox__slider-tray"
          classNameTrayWrap="cc-gallery-lightbox__slider-tray-wrap"
        >
          {slides.map((slide: GalleryLightBoxSlideProps, index: number) => (
            <Slide
              className="cc-gallery-lightbox__slide"
              index={index}
              innerClassName="cc-gallery-lightbox__slide-layout"
              innerTag="figure"
              key={`gallery-lightbox-slide-${slide.src}`}
            >
              <div className="cc-gallery-lightbox__image-pane">
                <div className="cc-gallery-lightbox__image-pane-stage">
                  <ImageElement alt={slide.alt} src={slide.src} />
                </div>
                <span className="cc-gallery-lightbox__image-pane-tray">
                  <div className="cc-gallery-lightbox__slide-actions">
                    <GalleryLightBoxNav
                      slideCount={slides.length}
                      currentSlide={index + 1}
                    />
                    <Button
                      className={infoPaneClassNames.toggle}
                      icon="chevronThin"
                      iconPlacementSwitch
                      onClick={toggleInfoPane}
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
                          <dd
                            className="cc-gallery-lightbox__meta-item-text"
                            dangerouslySetInnerHTML={{ __html: slide.license }}
                          />
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
              </div>
              <figcaption
                className={infoPaneClassNames.pane}
                dangerouslySetInnerHTML={{ __html: slide.caption }}
              />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </dialog>
  );
};

/**
 * TODO #6673: Integrate GalleryLighBox
 *
 * Temporaily declare some default props to prevent type errors until
 * we integrate the Lightbox.
 */
GalleryLightBox.defaultProps = {
  slides: []
};

export default GalleryLightBox;
