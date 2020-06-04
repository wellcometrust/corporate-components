import React, { MouseEventHandler } from 'react';
import cx from 'classnames';

import Button from 'Button';
import ImageElement from 'Image/ImageElement';

type GalleryMediaProps = {
  height: number;
  isLead?: boolean;
  onClick: MouseEventHandler;
  src: string;
  srcSet?: string;
  width: number;
};

const GalleryMedia = ({
  height,
  isLead,
  onClick,
  src,
  srcSet,
  width
}: GalleryMediaProps) => {
  const classNames = cx('cc-gallery__media-item', {
    'cc-gallery__media-lead': isLead,
    'cc-gallery__media-lead--landscape': isLead && width >= height,
    'cc-gallery__media-lead--portrait': isLead && height > width
  });

  return (
    <>
      <Button className={classNames} onClick={onClick} variant="unstyled">
        <ImageElement className="cc-gallery__media-content" src={src} />
      </Button>
      {isLead && <div className="break" />}
    </>
  );
};

type GalleryProps = {
  children?: React.ReactNode;
};

export const Gallery = ({ children }: GalleryProps) => {
  const handleOnClick = (e: any) => {
    console.log(e.currentTarget);
  };

  return (
    <div className="cc-gallery grid">
      <div className="cc-gallery__media">{children}</div>
    </div>
  );
};

export default Gallery;
export { GalleryMedia };
