import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import SocialShare from './SocialShare';
import Readme from './SocialShare.md';

const SocialShareExample = () => {
  const hasCopyLink = boolean('hasCopyLink', false);
  return (
    <SocialShare
      body="Share body text"
      hasCopyLink={hasCopyLink}
      title="Share title"
      url="https://wellcome.org"
    />
  );
};

const stories = storiesOf('Components|Page header', module);

stories.add('SocialShare', SocialShareExample, {
  readme: { sidebar: Readme }
});
