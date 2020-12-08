import React from 'react';
import cx from 'classnames';

import MediaCaption from './MediaCaption';
import Grid, { GridCell } from '../Grid';

type MediaProps = {
  caption?: string;
  children: React.ReactElement;
  className?: string;
  credit?: string;
  licence?: string;
  type: 'image' | 'video';
};

const Media = ({
  caption,
  children,
  className,
  credit,
  licence,
  type
}: MediaProps) => {
  const classNames = cx('cc-media', {
    [className]: className
  });

  return (
    <figure className={classNames}>
      <Grid>
        <GridCell column={2} columnCount={3}>
          <div className={`cc-media__element cc-media__element--${type}`}>
            {children}
          </div>
        </GridCell>
        <GridCell column={3} columnCount={3}>
          <div className="cc-media__element">
            <MediaCaption
              caption={caption}
              className="cc-media--wide__caption"
              credit={credit}
              licence={licence}
            />
          </div>
        </GridCell>
      </Grid>
    </figure>
  );
};

export default Media;
export { MediaCaption };
