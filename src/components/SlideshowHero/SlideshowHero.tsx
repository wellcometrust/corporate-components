import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import Grid, { GridCell } from 'Grid';

type SlideshowHeroProps = {
  className?: string;
  standfirst?: string;
  title: string;
};

export const SlideshowHero = ({
  className,
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

  return (
    <div className={classNames}>
      <div className="slideshow-hero__container">
        <Grid>
          <GridCell column={1} columnCount={1}>
            <h1 className="slideshow-hero__title">{title}</h1>
            {standfirst}
          </GridCell>
        </Grid>
      </div>
    </div>
  );
};

export default SlideshowHero;
