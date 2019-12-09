import React from 'react';
import { storiesOf } from '@storybook/react';

import WellcomeCollectionBanner from 'WellcomeCollectionBanner';

const BannerExample = () => {
  return <WellcomeCollectionBanner />;
};

const stories = storiesOf('Components|WellcomeCollectionBanner', module);

stories.add('WellcomeCollectionBanner', BannerExample);
