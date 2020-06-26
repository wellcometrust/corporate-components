import React, {
  Children,
  cloneElement,
  MouseEventHandler,
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
  fileSize?: number;
  height: number;
  isLead?: boolean;
  mediaSources: any;
  onClick?: MouseEventHandler;
  width: number;
};

// #6872 - finalise Gallery responsive images
const imageSizes = {
  default:
    '(min-width: 1494px) 310px, (min-width: 1024px) 20vw, (min-width: 768px) 27vw, (min-width: 512px) 42vw, 90vw',
  landscape:
    '(min-width: 1494px) 996px, (min-width: 1024px) 66vw, (min-width: 768px) 90vw, 90vw',
  portrait:
    '(min-width: 1494px) 482px, (min-width: 1024px) 32vw, (min-width: 768px) 43vw, 90vw'
};

const getSizes = (isLead: boolean, isPortrait: boolean) => {
  if (isLead && isPortrait) {
    return imageSizes.landscape;
  }
  if (isLead && !isPortrait) {
    return imageSizes.landscape;
  }

  return imageSizes.default;
};

export const GalleryMedia = ({
  alt,
  caption,
  credit,
  fileSize,
  height,
  isLead,
  mediaSources,
  onClick,
  width
}: GalleryMediaProps) => {
  const isPortrait = height > width;
  const classNames = cx('cc-gallery__media-item', {
    'cc-gallery__media-lead': isLead,
    'cc-gallery__media-lead--landscape': isLead && !isPortrait,
    'cc-gallery__media-lead--portrait': isLead && isPortrait
  });

  const sizes = getSizes(isLead, isPortrait);

  const src = isLead
    ? mediaSources.gallery_full_mobile
    : mediaSources.gallery_thumbnail_square_mobile;

  const srcSetLeadWidth = isPortrait ? '482w' : '790w';

  const srcSet = isLead
    ? `
      ${mediaSources.gallery_full_mobile} 768w,
      ${mediaSources.gallery_full_mobile_hi} 1538w
    `
    : `
      ${mediaSources.gallery_thumbnail_square_mobile} 310w,
      ${mediaSources.gallery_thumbnail_square_mobile_hi} 620w`;

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
            sizes={sizes}
            src={src}
            srcSet={srcSet}
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentLightboxSlideIndex, setCurrentLightboxSlideIndex] = useState(0);

  const openLightbox = (slideIndex: number) => {
    setCurrentLightboxSlideIndex(slideIndex);
    setIsLightboxOpen(true);
  };

  const childrenWithProps = Children.map(children, (child, index) =>
    cloneElement(child, {
      isLead: hasLeadItem && index === 0,

      /**
       * Pass an onClick handler to the child, to allow it to open
       * the lightbox from itself.
       */
      onClick: () => openLightbox(index)
    })
  );

  const lightboxSlides = Children.map(children, child => {
    return {
      alt: child.props.alt,
      caption: child.props.caption,
      credit: child.props.credit,
      fileSize: child.props.fileSize,
      license: child.props.license,
      mediaSources: child.props.mediaSources
    };
  });

  return (
    <div className="cc-gallery grid">
      <div className="cc-gallery__media">{childrenWithProps}</div>
      {isLightboxOpen && (
        <GalleryLightBox
          handleClose={() => setIsLightboxOpen(false)}
          isOpen={isLightboxOpen}
          openAtSlideIndex={currentLightboxSlideIndex}
          slides={lightboxSlides}
        />
      )}
    </div>
  );
};

export default Gallery;
