import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import bowser from 'bowser';

import Button from 'Button';
import Grid from 'Grid';
import Picture from 'Picture';

type SlideshowHeroProps = {
  animationDuration?: number;
  className?: string;
  images?: {
    caption: string;
    credit: string;
    id: string;
    srcNarrow: string;
    srcNarrowPreload: string;
    srcWide: string;
    srcWidePreload: string;
    srcSuperWide: string;
    srcSuperWidePreload: string;
  }[];
  moreLink?: string;
  skipLink?: string;
  skipLinkText?: string;
  standfirst?: string;
  title: string;
};

export const SlideshowHero = ({
  animationDuration = 6000,
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

  useEffect(() => {
    if (images.length) {
      const imgArray = document.querySelectorAll('.slideshow__image-frame');

      imgArray.forEach(el => {
        const sources = Array.from(el.querySelectorAll('source'));

        sources.forEach(source => {
          // assigned source to separate variable `s` to avoid mutating the arguments object
          const s = source;

          // update the source (need to update both the property and the HTML attribute because of iOS Safari)
          s.srcset = s.dataset.srcset;
          s.setAttribute('srcset', s.getAttribute('data-srcset'));
        });
      });
    }
  }, []);

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
      // slideshow timing sequence
      const t = setInterval(
        (function() {
          let nextIndex = 0;

          return function() {
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
                  {
                    caption,
                    credit,
                    id,
                    srcNarrow,
                    srcNarrowPreload,
                    srcWide,
                    srcWidePreload,
                    srcSuperWide,
                    srcSuperWidePreload
                  },
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
                          <Picture
                            fallbackSrc={srcWide}
                            isLazy
                            src={srcNarrowPreload}
                            srcSet={srcNarrow}
                            srcSetPreload={srcNarrowPreload}
                            srca={srcWide}
                            srcap={srcWidePreload}
                            srcb={srcSuperWide}
                            srcbp={srcSuperWidePreload}
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
