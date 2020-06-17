import React, {
  Children,
  cloneElement,
  MouseEventHandler,
  MouseEvent,
  useState
} from 'react';
import cx from 'classnames';

import Button from 'Button';
import ImageElement from 'Image/ImageElement';
import GalleryLightBox from 'GalleryLightBox';

type GalleryMediaProps = {
  alt?: string;
  caption?: string;
  credit?: string;
  height: number;
  isLead?: boolean;
  onClick: MouseEventHandler;
  src: string;
  srcSet?: string;
  width: number;
};

export const GalleryMedia = ({
  alt,
  caption,
  credit,
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
      <div className={classNames}>
        <Button
          className="cc-gallery__media-frame"
          onClick={onClick}
          variant="unstyled"
        >
          <ImageElement
            alt={alt}
            className="cc-gallery__media-content"
            src={src}
          />
        </Button>
      </div>
      {isLead && <div className="break" />}
    </>
  );
};

type GalleryProps = {
  children?: JSX.Element[];
};

export const Gallery = ({ children }: GalleryProps) => {
  const handleOnClick = (e: any) => {
    // TODO open gallery lightbox
    console.log('Gallery handleOnClick', e.currentTarget);
  };

  const childrenWithProps = Children.map(children, child =>
    cloneElement(child, { onClick: handleOnClick })
  );

  return (
    <div className="cc-gallery grid">
      <div className="cc-gallery__media">{childrenWithProps}</div>
      <GalleryLightBox />
    </div>
  );
};

export default Gallery;
