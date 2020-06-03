import React, { MouseEventHandler } from 'react';
import cx from 'classnames';

import Button from 'Button';

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
  // const [loaded, setLoaded] = useState(false);

  // const onLoad = () => {
  //   setLoaded(true);
  // };

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const onError = (e: any) => {
  //   console.error('Image error', e);
  // };

  const classNames = cx('cc-gallery__media-item', {
    'cc-gallery__media-lead': isLead,
    'cc-gallery__media-lead--landscape': isLead && width >= height,
    'cc-gallery__media-lead--portrait': isLead && height > width
  });

  return (
    <>
      <Button className={classNames} onClick={onClick} variant="unstyled">
        <img alt="" className="cc-gallery__media-content" src={src} />
      </Button>
      {isLead && <div className="break" />}
    </>
  );
};

export const Gallery = () => {
  const handleOnClick = (e: any) => {
    console.log(e.currentTarget);
  };

  return (
    <div className="cc-gallery grid">
      <div className="cc-gallery__media">
        <GalleryMedia
          height={1200}
          isLead
          src="https://placehold.it/678x1200"
          width={678}
          onClick={handleOnClick}
        />
        <GalleryMedia
          height={310}
          src="https://placehold.it/310x310"
          width={310}
          onClick={handleOnClick}
        />
        <GalleryMedia
          height={310}
          src="https://placehold.it/310x310"
          width={310}
          onClick={handleOnClick}
        />
        <GalleryMedia
          height={310}
          src="https://placehold.it/310x310"
          width={310}
          onClick={handleOnClick}
        />
        <GalleryMedia
          height={310}
          src="https://placehold.it/310x310"
          width={310}
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
};

export default Gallery;
