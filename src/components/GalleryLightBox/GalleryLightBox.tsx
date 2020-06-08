import React, { useState } from 'react';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

export const GalleryLightBox = () => {
  return (
    <dialog open className="cc-gallery-lightbox">
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={240}
        totalSlides={3}
        className="cc-gallery-lightbox__carousel"
      >
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <Slider className="cc-gallery-lightbox__slider">
          <Slide className="cc-gallery-lightbox__slide" index={0}>
            <div className="cc-gallery-lightbox__image-pane">
              <picture className="cc-gallery-lightbox__media-content">
                <source
                  srcSet="https://placehold.it/720x310"
                  media="(min-width: 768px)"
                />
                <img alt="" srcSet="https://placehold.it/310x310" />
              </picture>
              <dl className="cc-gallery-lightbox__meta-info">
                <dt>Image Credit</dt>
                <dd>Slide image credit info</dd>
                <dt>Image Licence</dt>
                <dd>Slice image licenceinfo</dd>
              </dl>
            </div>
            <div className="cc-gallery-lightbox__caption">
              <h3>Optional image title</h3>
              <p>
                Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula. Cras ultricies ligula sed magna
                dictum porta.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Proin eget tortor risus.
              </p>

              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin
                molestie malesuada. Cras ultricies ligula sed magna dictum
                porta.
              </p>
            </div>
          </Slide>
          <Slide className="cc-gallery-lightbox__slide" index={1}>
            <div className="cc-gallery-lightbox__image-pane">
              <picture className="cc-gallery-lightbox__media-content">
                <source
                  srcSet="https://placehold.it/720x710"
                  media="(min-width: 768px)"
                />
                <img alt="" srcSet="https://placehold.it/310x310" />
              </picture>
              <dl className="cc-gallery-lightbox__meta-info">
                <dt>Image Credit</dt>
                <dd>Slide image credit info</dd>
                <dt>Image Licence</dt>
                <dd>Slice image licenceinfo</dd>
              </dl>
            </div>
            <div className="cc-gallery-lightbox__caption">
              <h3>Optional image title</h3>
              <p>
                Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula. Cras ultricies ligula sed magna
                dictum porta.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Proin eget tortor risus.
              </p>

              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin
                molestie malesuada. Cras ultricies ligula sed magna dictum
                porta.
              </p>
            </div>
          </Slide>
          <Slide className="cc-gallery-lightbox__slide" index={2}>
            <div className="cc-gallery-lightbox__image-pane">
              <picture className="cc-gallery-lightbox__media-content">
                <source
                  srcSet="https://placehold.it/1020x710"
                  media="(min-width: 768px)"
                />
                <img alt="" srcSet="https://placehold.it/310x310" />
              </picture>
              <dl className="cc-gallery-lightbox__meta-info">
                <dt>Image Credit</dt>
                <dd>Slide image credit info</dd>
                <dt>Image Licence</dt>
                <dd>Slice image licenceinfo</dd>
              </dl>
            </div>
            <div className="cc-gallery-lightbox__caption">
              <h3>Optional image title</h3>
              <p>
                Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula. Cras ultricies ligula sed magna
                dictum porta.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. Proin eget tortor risus.
              </p>

              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin
                molestie malesuada. Cras ultricies ligula sed magna dictum
                porta.
              </p>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </dialog>
  );
};

export default GalleryLightBox;
