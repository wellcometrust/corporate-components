import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import SiteAlert from 'SiteAlert';

const SiteAlertExample = () => {
  const isActive = boolean('isActive', true);
  const urlString = text('url', 'https://wellcome.ac.uk/');
  const textString = text('text', 'Visit the Wellcome Trust website');

  return <SiteAlert isActive={isActive} text={textString} url={urlString} />;
};

const stories = storiesOf('Components|SiteAlert', module);

stories.add('SiteAlert', SiteAlertExample);
