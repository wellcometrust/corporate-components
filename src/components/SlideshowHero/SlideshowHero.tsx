import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import bowser from 'bowser';

import Button from 'Button';
import Grid, { GridCell } from 'Grid';

type SlideshowHeroProps = {
  className?: string;
  images?: {
    caption: string;
    credit: string;
    focalX?: number;
    focalY?: number;
    id: string;
    src: string;
  }[];
  standfirst?: string;
  animationDuration?: number;
  animationSpeed?: number;
  title: string;
};

export const SlideshowHero = ({
  className,
  images,
  standfirst,
  animationDuration = 2000,
  animationSpeed = 400,
  title
}: SlideshowHeroProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [browserName, setBrowserName] = useState(null);
  const imageCount = images.length || 0;

  const classNames = cx('slideshow-hero', {
    [`${browserName}`]: browserName,
    [`${className}`]: className
  });

  useEffect(() => {
    const browser = bowser.getParser(window.navigator.userAgent);

    setBrowserName(`is-${browser.getBrowserName().toLowerCase()}`);
  }, []);

  useEffect(() => {
    const t = setInterval(
      (function() {
        let nextIndex = 0;

        return function() {
          setCurrentSlideIndex(nextIndex);

          // remove active state to fade out previous image before next image comes in
          setTimeout(() => {
            setCurrentSlideIndex(null);
          }, animationDuration - animationSpeed);

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
  }, []);

  const handleClick = () => {};

  return (
    <div className={classNames}>
      <div className="slideshow-hero__container">
        <Grid className="slideshow-hero__grid">
          <div className="slideshow-hero__content">
            <div className="slideshow-hero__copy">
              <h1 className="slideshow-hero__title">{title}</h1>
              <p className="slideshow-hero__standfirst">{standfirst}</p>
              <Button
                variant="link"
                href="/"
              >
                Learn more
              </Button>
            </div>
            <Button
              variant="unstyled"
              className="slideshow-hero__btn-skip"
              icon="chevronThin"
              onClick={handleClick}
            >
              <span className="u-visually-hidden">Show search pane</span>
            </Button>
          </div>
          <div className="slideshow">
            {images &&
              images.map(
                ({ caption, credit, focalX, focalY, id, src }, index) => {
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
                          <img src={src} alt="" className="slideshow__image" />
                        </div>
                      </div>
                      <figcaption className="slideshow__image-caption">
                        <span className="slideshow__image-caption-detail">
                          {caption}&nbsp;
                        </span>
                        <span className="slideshow__image-credit">{credit}</span>
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