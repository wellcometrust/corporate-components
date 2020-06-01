import React, { useState } from 'react';

// type GalleryProps = {};

export const Gallery = () => {
  // const [loaded, setLoaded] = useState(false);

  // const onLoad = () => {
  //   setLoaded(true);
  // };

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const onError = (e: any) => {
  //   console.error('Image error', e);
  // };

  return (
    <div className="cc-gallery grid">
      <div className="cc-gallery__media">
        <div className="cc-gallery__media-item">
          <img
            alt=""
            className="cc-gallery__media-content"
            srcSet="https://placehold.it/310x310"
          />
        </div>
        <div className="cc-gallery__media-item">
          <img
            alt=""
            className="cc-gallery__media-content"
            srcSet="https://placehold.it/310x310"
          />
        </div>
        <div className="cc-gallery__media-item">
          <img
            alt=""
            className="cc-gallery__media-content"
            srcSet="https://placehold.it/310x310"
          />
        </div>
        <div className="cc-gallery__media-item">
          <img
            alt=""
            className="cc-gallery__media-content"
            srcSet="https://placehold.it/310x310"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
