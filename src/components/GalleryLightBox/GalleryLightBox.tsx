import React, { useState } from 'react';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';

import ImageElement from 'Image/ImageElement';
import Icon from 'Icon';

type GalleryLightBoxProps = {
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
    <ButtonBack className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--back">
      <Icon name="arrow" />
    </ButtonBack>
    <span className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--count">
      {`${currentSlide} / ${slideCount}`}
    </span>
    <ButtonNext className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--next">
      <Icon name="arrow" />
    </ButtonNext>
  </div>
);

export const GalleryLightBox = ({ slides }: GalleryLightBoxProps) => (
  <dialog className="cc-gallery-lightbox">
    <CarouselProvider
      className="cc-gallery-lightbox__carousel"
      dragEnabled={false}
      naturalSlideWidth={16}
      naturalSlideHeight={9}
      totalSlides={slides.length}
    >
      <Slider
        className="cc-gallery-lightbox__slider"
        classNameTray="cc-gallery-lightbox__carousel-tray"
        classNameTrayWrap="cc-gallery-lightbox__carousel-tray-wrap"
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
                <GalleryLightBoxNav
                  slideCount={slides.length}
                  currentSlide={index + 1}
                />
                {!!(slide.credit || slide.license) && (
                  <dl className="cc-gallery-lightbox__meta">
                    {slide.credit && (
                      <>
                        <dt className="cc-gallery-lightbox__meta-item cc-gallery-lightbox__meta-item--label">
                          Image credit:
                        </dt>
                        <dd
                          className="cc-gallery-lightbox__meta-item cc-gallery-lightbox__meta-item--text"
                          dangerouslySetInnerHTML={{ __html: slide.credit }}
                        />
                      </>
                    )}
                    {slide.license && (
                      <>
                        <dt className="cc-gallery-lightbox__meta-item cc-gallery-lightbox__meta-item--label">
                          Image license:
                        </dt>
                        <dd
                          className="cc-gallery-lightbox__meta-item cc-gallery-lightbox__meta-item--text"
                          dangerouslySetInnerHTML={{ __html: slide.license }}
                        />
                      </>
                    )}
                  </dl>
                )}
                <span className="cc-gallery-lightbox__download">
                  <a
                    href={slide.src}
                    download
                    className="cc-gallery-lightbox__download-link"
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
              className="cc-gallery-lightbox__info-pane"
              dangerouslySetInnerHTML={{ __html: slide.caption }}
            />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  </dialog>
);

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
