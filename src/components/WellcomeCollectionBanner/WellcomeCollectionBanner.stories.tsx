import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import WellcomeCollectionBanner from 'WellcomeCollectionBanner';

const BannerExample = () => {
  const isActive = boolean('isActive', true);

  return <WellcomeCollectionBanner isActive={isActive} />;
};

const stories = storiesOf('Components/WellcomeCollectionBanner', module);

stories.add('WellcomeCollectionBanner', BannerExample);
