import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import ImageBanner from 'ImageBanner';
import SocialShare from 'SocialShare';
import PageHeader from './PageHeader';

import ViewportContext, {
  ViewportContextProvider
} from '../ViewportContext/ViewportContext';

const PageHeaderExample = () => {
  const { isMobile } = React.useContext(ViewportContext);

  const generalID = 'General';
  const imageID = 'Image';
  const metaID = 'Meta';

  // toggle page furniture
  const showImage = boolean('Show image', true, imageID);
  const showSocialShare = boolean('Show social share', true, generalID);

  const background = select(
    'background',
    ['blue', 'transparent'],
    'transparent',
    generalID
  );
  const imageLocation = select(
    'imageLocation',
    ['top', 'bottom'],
    'top',
    imageID
  );
  const imageElement = showImage ? (
    <ImageBanner
      alt=""
      caption="caption"
      credit="banner.attributes.credit"
      // licence={'banner.attributes.rights_attrib'}
      src="https://placehold.it/768x432"
      srcSet={`
          https://placehold.it/3840x2160 3840w,
          https://placehold.it/1920x1080 1920w,
          https://placehold.it/1440x810 1440w,
          https://placehold.it/768x432
        `}
    />
  ) : null;
  const sectionLinks = [
    {
      title: 'Section title 1',
      id: '#section-title-1'
    },
    {
      title: 'Section title 2',
      id: '#section-title-2'
    },
    {
      title: 'Very very very very very very very very long Section title 3',
      id: '#section-title-3'
    },
    {
      title: 'Section title 4',
      id: '#section-title-4'
    }
  ];

  const socialShare = showSocialShare && (
    <SocialShare
      body="Wellcome Trust share text ..."
      title="Wellcome Trust"
      url="https://wellcome.org"
    />
  );

  const className = text('classname', '', generalID);
  const datePublished = text('datePublished', '', metaID);
  const dateUpdated = text('dateUpdated', '', metaID);
  const meta = text('meta', 'Meta data', metaID);
  const metaLabel = text('metaLabel', 'Meta', metaID);
  const standfirst = text(
    'standfirst',
    `At least $8 billion of new funding is needed for the global response to coronavirus (COVID-19). Funding committed so far by countries and international financial institutions will help governments to take national action and bolster economies. But urgent gaps remain, especially in funding research and development and public health measures.`,
    generalID
  );
  const title = text('title', 'Search Results', generalID);

  return (
    <ViewportContextProvider>
      <PageHeader
        background={background}
        imageElement={imageElement}
        imageLocation={imageLocation}
        className={className}
        datePublished={datePublished}
        dateUpdated={dateUpdated}
        meta={meta}
        metaLabel={metaLabel}
        share={socialShare}
        standfirst={standfirst}
        title={title}
      />
    </ViewportContextProvider>
  );
};

const stories = storiesOf('Components/Page header', module);

stories.add('PageHeader', PageHeaderExample);
