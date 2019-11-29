import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import WellcomeCollectionBanner from 'WellcomeCollectionBanner';

const WCLinkExample = () => {
  return <WellcomeCollectionBanner />;
};

const stories = storiesOf('Components|WellcomeCollectionBanner', module);

stories.add('WellcomeCollectionBanner', WCLinkExample);
