import React, { useContext } from 'react';
import cx from 'classnames';

import Accordion, { AccordionItem } from 'Accordion/Accordion';
import ImageElement from 'Image/ImageElement';

import ViewportContext from 'ViewportContext/ViewportContext';

type ImageBannerProps = {
  alt: string;
  caption?: string;
  credit?: string;
  className?: string;
  license?: string;
  sizes?: string;
  src: string;
  srcSet?: string;
};

const imageSizesDefault = '100vw';

export const ImageBanner = ({
  alt,
  caption,
  credit,
  className,
  license,
  sizes = imageSizesDefault,
  src,
  srcSet
}: ImageBannerProps) => {
  const { isMobile } = useContext(ViewportContext);
  const classNames = cx('cc-image-banner', {
    [`${className}`]: className
  });

  return (
    <figure className={classNames} role="banner">
      <div className="cc-image-banner__container">
        <ImageElement
          alt={alt}
          className="cc-image-banner__img"
          role="presentation"
          sizes={sizes}
          src={src}
          srcSet={srcSet}
        />
      </div>

      {caption || credit || license ? (
        <div className="cc-image-banner__caption-container">
          <figcaption className="cc-media__caption cc-image-banner__caption">
            {credit && (
              <div
                className="cc-media__credit"
                dangerouslySetInnerHTML={{ __html: `Credit: ${credit}` }}
              />
            )}
            {license && (
              <span
                className="cc-media__license"
                dangerouslySetInnerHTML={{ __html: `License: ${license}` }}
              />
            )}
            {isMobile && caption ? (
              <Accordion>
                <AccordionItem
                  title="Read the caption"
                  titleAs="strong"
                  titleActive="Hide the caption"
                >
                  <span
                    className="cc-media__caption-detail"
                    dangerouslySetInnerHTML={{ __html: caption }}
                  />
                </AccordionItem>
              </Accordion>
            ) : (
              caption && (
                <span className="cc-media__caption-detail">{caption}</span>
              )
            )}
          </figcaption>
        </div>
      ) : null}
    </figure>
  );
};

export default ImageBanner;
