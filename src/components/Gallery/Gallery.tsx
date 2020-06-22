import React, { Children, cloneElement, MouseEventHandler } from 'react';
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
  mediaSources: any;
  onClick?: MouseEventHandler;
  sizes?: string;
  width: number;
};

// #6872 - finalise Gallery responsive images
const imageSizesDefault =
  '(min-width: 1494px) 310px, (min-width: 1024px) 20vw, (min-width: 768px) 27vw, (min-width: 512px) 42vw, 90vw';
const imageSizesLandscape =
  '(min-width: 1494px) 648px, (min-width: 1024px) 42vw, (min-width: 768px) 75vw, 90vw';
const imageSizesPortrait =
  '(min-width: 1494px) 482px, (min-width: 1024px) 42vw, (min-width: 768px) 75vw, 90vw';

export const GalleryMedia = ({
  alt,
  caption,
  credit,
  height,
  isLead,
  mediaSources,
  onClick,
  sizes,
  width
}: GalleryMediaProps) => {
  const classNames = cx('cc-gallery__media-item', {
    'cc-gallery__media-lead': isLead,
    'cc-gallery__media-lead--landscape': isLead && width >= height,
    'cc-gallery__media-lead--portrait': isLead && height > width
  });

  const src = isLead
    ? mediaSources.gallery_thumbnail_original_mobile
    : mediaSources.gallery_thumbnail_square_mobile;

  const srcSetLeadWidth = width >= height ? '790w' : '482w';

  const srcSet = isLead
    ? `${mediaSources.gallery_thumbnail_original} ${srcSetLeadWidth},
      ${mediaSources.gallery_thumbnail_original_mobile}`
    : `${mediaSources.gallery_thumbnail_square} 310w,
      ${mediaSources.gallery_thumbnail_square_mobile}`;

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
            srcSet={src}
          />
        </Button>
      </div>
      {isLead && <div className="break" />}
    </>
  );
};

type GalleryProps = {
  children?: JSX.Element | JSX.Element[];
  hasLeadItem?: boolean;
};

export const Gallery = ({ children, hasLeadItem = false }: GalleryProps) => {
  const handleOnClick = (e: any) => {
    // TODO open gallery lightbox
    console.log('Gallery handleOnClick', e.currentTarget);
  };

  const childrenWithProps = Children.map(children, (child, index) =>
    cloneElement(child, {
      isLead: hasLeadItem && index === 0,
      onClick: handleOnClick
    })
  );

  return (
    <div className="cc-gallery grid">
      <div className="cc-gallery__media">{childrenWithProps}</div>
      <GalleryLightBox />
    </div>
  );
};

export default Gallery;
