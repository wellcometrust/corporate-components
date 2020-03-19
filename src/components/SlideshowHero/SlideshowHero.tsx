import React, { useEffect, useState } from 'react';
import cx from 'classnames';

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
  title: string;
};

export const SlideshowHero = ({
  className,
  images,
  standfirst,
  title
}: SlideshowHeroProps) => {
  const [loaded, setLoaded] = useState(false);

  const classNames = cx('slideshow-hero', {
    [`${className}`]: className
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleClick = () => {};

  return (
    <div className={classNames}>
      <div className="slideshow-hero__container">
        <Grid>
          <div className="grid-one">
            <div className="slideshow-hero__content">
              <h1 className="slideshow-hero__title">{title}</h1>
              <p className="slideshow-hero__standfirst">{standfirst}</p>
              <a href="/">Learn more</a>
            </div>
            <Button
              variant="unstyled"
              className="slideshow-hero__btn-skip"
              icon="chevron"
              onClick={handleClick}
            >
              <span className="u-visually-hidden">Show search pane</span>
            </Button>
          </div>
          {images && (
            <div className="slideshow">
              {images.map(({ caption, credit, focalX, focalY, id, src }) => (
                <figure key={`slideshow-image-${id}`} className="image-wrapper">
                  <div className="foo">
                    <div className="image-frame">
                      <img src={src} alt="" className="image" />
                    </div>
                  </div>
                  <figcaption className="image-caption">
                    <span className="image-caption-detail">
                      {caption}&nbsp;
                    </span>
                    <span className="image-credit">{credit}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default SlideshowHero;
