import React from 'react';

import Author, { AuthorProps } from 'Author/Author';
import { ImageElement } from 'Image';
import FormattedDate from 'FormattedDate';
import PageTitle from 'PageTitle';
import RichText from 'RichText';
import SocialShare from 'SocialShare';
import TagList, { TagProps } from 'TagList/TagList';

type AuthorPropsExtend = AuthorProps & {
  id: string;
};

type PageHeaderCompactProps = {
  authors: AuthorPropsExtend[];
  date: string;
  imageAlt?: string;
  imageCaption?: string;
  imageCredit?: string;
  imageLicence?: string;
  imageSizes?: string;
  imageSrc?: string;
  imageSrcSet?: string;
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
  imageSizes = '(min-width: 1494px) 648px, (min-width: 1024px) 45vw, (min-width: 768px) 90vw, 100vw',
  imageSrc,
  imageSrcSet,
  metaLabel,
  socialUrl,
  standfirst,
  title,
  topics
}: PageHeaderCompactProps) => (
  <header className="cc-page-header-compact">
    <div className="cc-page-header-compact__main cc-page-header-compact__section cc-page-header-compact__section--main">
      <PageTitle metaLabel={metaLabel} title={title} />
      <div className="cc-page-header-compact__standfirst">
        <RichText>{standfirst}</RichText>
      </div>
    </div>
    {(!!imageSrc || (imageSrcSet && imageSizes?.trim().length)) && (
      <figure className="cc-page-header-compact__image cc-page-header-compact__section cc-page-header-compact__section--main">
        <ImageElement
          alt={imageAlt}
          sizes={imageSizes}
          src={imageSrc}
          srcSet={imageSrcSet}
        />
        {(imageCaption || imageCredit || imageLicence) && (
          <figcaption className="cc-media__caption">
            {imageCaption && (
              <RichText className="cc-media__caption-detail">
                {imageCaption}
              </RichText>
            )}
            {imageCredit && (
              <RichText className="cc-media__credit">
                {`Credit: ${imageCredit}`}
              </RichText>
            )}
            {imageLicence && (
              <RichText className="cc-media__license">{imageLicence}</RichText>
            )}
          </figcaption>
        )}
      </figure>
    )}
    <div className="cc-page-header-compact__aside cc-page-header-compact__section cc-page-header-compact__section--sidebar">
      {authors && (
        <div className="cc-page-header-compact__authors">
          {authors.map(author => (
            <Author
              imageSizes="(min-width: 48em) 6.25rem, 3.125rem"
              imageSrc={author.imageSrc}
              imageSrcSet={author.imageSrcSet}
              jobTitle={author.jobTitle}
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
