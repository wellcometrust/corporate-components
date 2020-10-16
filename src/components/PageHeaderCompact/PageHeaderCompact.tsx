import React from 'react';

import Author, { AuthorProps } from 'Author/Author';
import { ImageElement } from 'Image';
import RichText from 'RichText';
import TagList, { TagProps } from 'TagList/TagList';
import SocialShare from 'SocialShare';
import FormattedDate from 'FormattedDate';

interface AuthorPropsExtend extends AuthorProps {
  id: string;
}

type PageHeaderCompactProps = {
  authors: AuthorPropsExtend[];
  date: string;
  imageAlt?: string;
  imageCaption?: string;
  imageCredit?: string;
  imageSizes?: string;
  imageSrcSet?: string;
  imageSrc?: string;
  imageLicence?: string;
  metaLabel?: string;
  socialUrl: string;
  standfirst: string;
  title: string;
  topics: TagProps[];
};

export const PageHeaderCompact = ({
  authors,
  date,
  imageAlt,
  imageCaption,
  imageCredit,
  imageLicence,
  imageSizes,
  imageSrc,
  imageSrcSet,
  metaLabel,
  title,
  topics,
  socialUrl,
  standfirst
}: PageHeaderCompactProps) => (
  <header className="cc-page-header-compact">
    <div className="cc-page-header-compact__main cc-page-header-compact__section cc-page-header-compact__section--main">
      <span className="cc-page-header-compact__meta">
        <strong className="cc-page-header-compact__meta-label">
          {metaLabel}
        </strong>
      </span>
      <h1 className="cc-page-header-compact__title">{title}</h1>
      <div className="cc-page-header-compact__standfirst">
        <RichText>{standfirst}</RichText>
      </div>
    </div>
    {(!!imageSrc || (imageSrcSet && imageSizes)) && (
      <figure className="cc-page-header-compact__image cc-page-header-compact__section cc-page-header-compact__section--main">
        <ImageElement src={imageSrc} srcSet={imageSrcSet} alt={imageAlt} />
        <figcaption className="cc-media__caption">
          {imageCaption && (
            <div
              className="cc-media__caption-detail"
              dangerouslySetInnerHTML={{ __html: imageCaption }}
            />
          )}
          {imageCredit && (
            <div
              className="cc-media__credit"
              dangerouslySetInnerHTML={{ __html: `Credit: ${imageCredit}` }}
            />
          )}
          {imageLicence && (
            <div
              className="cc-media__licence"
              dangerouslySetInnerHTML={{ __html: `Licence: ${imageLicence}` }}
            />
          )}
        </figcaption>
      </figure>
    )}
    <div className="cc-page-header-compact__aside cc-page-header-compact__section cc-page-header-compact__section--sidebar">
      {authors && (
        <div className="cc-page-header-compact__authors">
          {authors.map(author => (
            <Author
              jobTitle={author.jobTitle}
              imageSrc={author.imageSrc}
              imageSrcSet={author.imageSrcSet}
              imageSizes="(min-width: 48em) 6.25rem, 3.125rem"
              key={`author-${author.id}`}
              name={`${author.name}`}
              organization={author.organization}
            />
          ))}
        </div>
      )}
      {topics && (
        <div className="cc-page-header-compact__topics">
          <TagList tags={topics} />
        </div>
      )}
    </div>
    <div className="cc-page-header-compact__tray cc-page-header-compact__section cc-page-header-compact__section--main">
      <time dateTime={date}>
        <FormattedDate dateString={date} />
      </time>
      <SocialShare url={socialUrl} body={standfirst} title={title} />
    </div>
  </header>
);

export default PageHeaderCompact;
