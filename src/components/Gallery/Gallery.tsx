import React, {
  Children,
  cloneElement,
  MouseEventHandler,
  useEffect,
  useState
} from 'react';
import cx from 'classnames';
import queryString from 'query-string';

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
  title?: string;
  width: number;
};

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
  title,
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
  galleryId?: string;
  hasLeadItem?: boolean;
  handleClose?: () => void;
  handleBack?: () => void;
  handleNext?: () => void;
};

export const Gallery = ({
  children,
  galleryId,
  hasLeadItem = false,
  handleClose,
  handleBack,
  handleNext
}: GalleryProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentLightboxSlideIndex, setCurrentLightboxSlideIndex] = useState(0);

  const openLightbox = (slideIndex: number) => {
    setCurrentLightboxSlideIndex(slideIndex);
    setIsLightboxOpen(true);
  };

  const handleLightBoxClose = () => {
    handleClose();
    setIsLightboxOpen(false);
  };

  /**
   * Capture specific gallery and photo linking from hash
   * Hash is used in preference to querystring as the latter causes
   * the page to reload
   * As an aside `getStaticPaths` generates static files, which means they can't
   * access querystring at generation time
   * https://github.com/vercel/next.js/discussions/10951
   */
  useEffect(() => {
    const hash = queryString.parse(window.location.hash);
    const gid = hash?.gid;
    const pid = parseInt(hash?.pid as string, 10);

    if (gid === galleryId) {
      openLightbox(pid);
    }

    return () => {};
  }, []);

  const childrenWithProps = Children.map(children, (child, index) =>
    cloneElement(child, {
      /**
       * If the gallery is 'lead image' enabled then set the first item accordingly
       */
      isLead: hasLeadItem && index === 0,

      /**
       * Pass an additional onClick handler to the child, to allow it to open
       * the lightbox from itself.
       */
      onClick: () => {
        child.props.onClick(galleryId, index);
        openLightbox(index);
      }
    })
  );

  const lightboxSlides = Children.map(children, child => {
    return {
      alt: child.props.alt,
      caption: child.props.caption,
      credit: child.props.credit,
      fileSize: child.props.fileSize,
      license: child.props.license,
      mediaSources: child.props.mediaSources,
      title: child.props.title
    };
  });

  return (
    <div className="cc-gallery grid" id={galleryId}>
      <div className="cc-gallery__media">{childrenWithProps}</div>
      {isLightboxOpen && (
        <GalleryLightBox
          galleryId={galleryId}
          handleClose={handleLightBoxClose}
          isOpen={isLightboxOpen}
          handleBack={handleBack}
          handleNext={handleNext}
          openAtSlideIndex={currentLightboxSlideIndex}
          slides={lightboxSlides}
        />
      )}
    </div>
  );
};

export default Gallery;
