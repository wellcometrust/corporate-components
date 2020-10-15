import React from 'react';

import { ImageElement } from 'Image';

export type AuthorProps = {
  imageSizes: string;
  imageSrc: string;
  imageSrcSet: string;
  jobTitle: string;
  name: string;
  organization: string;
};

export const Author = ({
  imageSizes,
  imageSrc,
  imageSrcSet,
  jobTitle,
  name,
  organization
}: AuthorProps) => (
  <div className="cc-author" itemScope itemType="http://schema.org/Person">
    {(imageSrc || imageSrcSet) && (
      <figure className="cc-author__image">
        <ImageElement
          itemProp="image"
          sizes={imageSizes}
          src={imageSrc}
          srcSet={imageSrcSet}
          alt={`A photograph of the author, ${name}.`}
        />
      </figure>
    )}
    <div className="cc-author__body">
      <h2 className="cc-author__name" itemProp="name">
        {name}
      </h2>
      <p className="cc-author__byline">
        {jobTitle && <span itemProp="jobTitle">{jobTitle}</span>}
        {jobTitle && organization && ', '}
        {organization && <span itemProp="memberOf">{organization}</span>}
      </p>
    </div>
  </div>
);

export default Author;
