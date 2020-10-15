import React from 'react';

import Author, { AuthorProps } from 'Author/Author';
import Grid, { GridCell } from 'Grid';
import Image from 'Image';
import RichText from 'RichText';
import TagList, { TagProps } from 'TagList/TagList';
import SocialShare from 'SocialShare';

interface AuthorPropsExtend extends AuthorProps {
  id: string;
}

type PageHeaderCompactProps = {
  authors: AuthorPropsExtend[];
  date: Date;
  imageAlt: string;
  imageCaption: string;
  imageCredit: string;
  imageSrcSet: string;
  imageSrc: string;
  imageLicence: string;
  metaType: string;
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
  imageSrc,
  imageSrcSet,
  metaType,
  title,
  topics,
  socialUrl,
  standfirst
}: PageHeaderCompactProps) => (
  <header className="cc-page-header">
    <Grid>
      <GridCell column={2} columnCount={3}>
        <span className="cc-page-header__meta">
          <strong className="cc-page-header__meta-label">{metaType}</strong>
        </span>
        <h1 className="cc-page-header__title">{title}</h1>
        <div className="cc-page-header__standfirst">
          <RichText>{standfirst}</RichText>
        </div>
      </GridCell>
    </Grid>
    <Image
      caption={imageCaption}
      credit={imageCredit}
      licence={imageLicence}
      src={imageSrc}
      srcSet={imageSrcSet}
      alt={imageAlt}
    />
    <Grid>
      <GridCell column={2} columnCount={3}>
        <div className="cc-page-header__drawer">
          {date}
          <SocialShare url={socialUrl} body={standfirst} title={title} />
        </div>
      </GridCell>
      <GridCell column={1} columnCount={3}>
        {authors &&
          authors.map(author => (
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
        {topics && <TagList tags={topics} />}
      </GridCell>
    </Grid>
  </header>
);

export default PageHeaderCompact;
