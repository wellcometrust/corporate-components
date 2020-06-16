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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  /**
   * Handles opening the GalleryLightbox.
   */
  const openLightbox = (index: number) => {
    setCurrentLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const childrenWithProps = Children.map(children, (child, index) =>
    cloneElement(child, {
      /**
       * Pass an onClick handler to the child, to allow it to open
       * the lightbox from itself.
       */
      onClick: () => openLightbox(index)
    })
  );

  const slides = Children.map(children, child => {
    const { props } = child;

    return { ...props };
  });

  return (
    <div className="cc-gallery grid">
      <div className="cc-gallery__media">{childrenWithProps}</div>
      <GalleryLightBox
        isOpen={isLightboxOpen}
        openAtSlide={currentLightboxIndex}
        slides={slides}
      />
    </div>
  );
};

export default Gallery;
