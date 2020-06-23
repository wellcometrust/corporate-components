import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import ImageBanner from 'ImageBanner';
import InpageNav from 'InpageNav';
import SocialShare from 'SocialShare';
import PageHeader from './PageHeader';

const PageHeaderExample = () => {
  // toggle page furniture
  const showBanner = boolean('Show banner', true);
  const showInpageNav = boolean('Show inpage nav', true);
  const showSocialShare = boolean('Show social share', true);

  const background = select(
    'background',
    ['blue', 'transparent'],
    'transparent'
  );
  const bannerLocation = select('bannerLocation', ['top', 'bottom'], 'top');
  const banner = showBanner ? (
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
  const inpageNav = showInpageNav && <InpageNav links={sectionLinks} />;
  const socialShare = showSocialShare && (
    <SocialShare
      body="Wellcome Trust share text ..."
      title="Wellcome Trust"
      url="https://wellcome.ac.uk"
    />
  );

  const className = text('classname', '');
  const meta = text('meta', 'Meta data');
  const metaLabel = text('metaLabel', 'Meta');
  const standfirst = text(
    'standfirst',
    `At least $8 billion of new funding is needed for the global response to coronavirus (COVID-19). Funding committed so far by countries and international financial institutions will help governments to take national action and bolster economies. But urgent gaps remain, especially in funding research and development and public health measures.`
  );
  const title = text('title', 'Search Results');

  return (
    <PageHeader
      background={background}
      banner={banner}
      bannerLocation={bannerLocation}
      className={className}
      meta={meta}
      metaLabel={metaLabel}
      share={socialShare}
      standfirst={standfirst}
      title={title}
    >
      {inpageNav}
    </PageHeader>
  );
};

const stories = storiesOf('Components|Page header', module);

stories.add('PageHeader', PageHeaderExample);
