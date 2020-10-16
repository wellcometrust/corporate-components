import React from 'react';

import Author, { AuthorProps } from 'Author/Author';
import { ImageElement } from 'Image';
import PageTitle from 'PageTitle';
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
      <PageTitle metaLabel={metaLabel} title={title} />
      <div className="cc-page-header-compact__standfirst">
        <RichText>{standfirst}</RichText>
      </div>
    </div>
    {(!!imageSrc || (imageSrcSet && imageSizes)) && (
      <figure className="cc-page-header-compact__image cc-page-header-compact__section cc-page-header-compact__section--main">
        <ImageElement src={imageSrc} srcSet={imageSrcSet} alt={imageAlt} />
        <figcaption className="cc-media__caption">
          {imageCaption && (
            <RichText className="cc-media__caption-detail">
              {imageCaption}
            </RichText>
          )}
          {imageCredit && (
            <RichText className="cc-media__credit">{imageCredit}</RichText>
          )}
          {imageLicence && (
            <RichText className="cc-media__license">{imageLicence}</RichText>
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
