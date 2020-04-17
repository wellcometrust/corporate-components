import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import bowser from 'bowser';

import Button from 'Button';
import Grid, { GridCell } from 'Grid';

type SlideshowHeroProps = {
  animationDuration?: number;
  className?: string;
  images?: {
    caption: string;
    credit: string;
    id: string;
    srcNarrow: string;
    srcWide: string;
    srcSuperWide: string;
  }[];
  moreLink?: string;
  skipLink?: string;
  skipLinkText?: string;
  standfirst?: string;
  title: string;
};

export const SlideshowHero = ({
  animationDuration = 5000,
  className,
  images,
  moreLink,
  skipLink,
  skipLinkText,
  standfirst,
  title
}: SlideshowHeroProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [browserName, setBrowserName] = useState(null);
  const imageCount = images?.length || 0;

  const classNames = cx('slideshow-hero', {
    [`${browserName}`]: browserName,
    [`${className}`]: className
  });

  useEffect(() => {
    const browser = bowser.getParser(window.navigator.userAgent);

    setBrowserName(`is-${browser.getBrowserName().toLowerCase()}`);
  }, []);

  useEffect(() => {
    if (imageCount > 1) {
      const t = setInterval(
        (function() {
          let nextIndex = 0;

          return function() {
            setCurrentSlideIndex(null);
            setCurrentSlideIndex(nextIndex);

            nextIndex += 1;

            if (nextIndex > imageCount - 1) {
              nextIndex = 0;
            }
          };
        })(),
        animationDuration
      );

      return () => {
        clearInterval(t);
      };
    }
    setCurrentSlideIndex(0);

    return () => {};
  }, []);

  return (
    <div className={classNames}>
      <div className="slideshow-hero__container">
        <Grid className="slideshow-hero__grid">
          <div className="slideshow-hero__content">
            <div className="slideshow-hero__copy">
              <h1 className="slideshow-hero__title">{title}</h1>
              <p className="slideshow-hero__standfirst">{standfirst}</p>
              {moreLink && (
                <Button variant="link" href={moreLink}>
                  Learn more
                </Button>
              )}
            </div>
            {skipLink && (
              <Button
                aria-hidden="true"
                className="slideshow-hero__btn-skip"
                href={skipLink}
                icon="chevronThin"
                role="presentation"
                tabIndex={-1}
                variant="unstyled"
              >
                <span className="u-visually-hidden">{skipLinkText}</span>
              </Button>
            )}
          </div>
          <div className="slideshow">
            {images &&
              images.map(
                (
                  { caption, credit, id, srcNarrow, srcWide, srcSuperWide },
                  index
                ) => {
                  const imageClassNames = cx('slideshow__image-container', {
                    [`is-active`]: index === currentSlideIndex
                  });

                  return (
                    <figure
                      key={`slideshow-image-${id}`}
                      className={imageClassNames}
                      data-index={index}
                    >
                      <div className="slideshow__image-frame-outer">
                        <div className="slideshow__image-frame">
                          {/* TODO: 6411 - add responsive images */}
                          {/* <picture>
                            <source
                              type="image/jpeg"
                              media="(min-aspect-ratio: 16/9)"
                              srcSet={srcSuperWide}
                              data-loaded-url="<?php print $image['loaded_url'] ?>"
                            />
                            <source
                              type="image/jpeg"
                              media="(min-width: 768px)"
                              srcSet={srcWide}
                              data-loaded-url="<?php print $image['loaded_url'] ?>"
                            />
                            <img
                              srcSet={srcNarrow}
                              alt=""
                              className="slideshow__image"
                            />
                          </picture> */}
                          <img
                            src={srcNarrow}
                            alt=""
                            className="slideshow__image"
                          />
                        </div>
                      </div>
                      <figcaption className="slideshow__image-caption">
                        <span className="slideshow__image-caption-detail">
                          {caption}&nbsp;
                        </span>
                        <span className="slideshow__image-credit">
                          {credit}
                        </span>
                      </figcaption>
                    </figure>
                  );
                }
              )}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default SlideshowHero;
