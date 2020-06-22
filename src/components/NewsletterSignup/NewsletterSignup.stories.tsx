import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import NewsletterSignup from './NewsletterSignup';
import Readme from './NewsletterSignup.md';

const NewsletterSignupExample = () => {
  const titleText = text('title', 'Sign up to our research newsletter');
  const introText = text(
    'intro',
    'Get the latest news about Wellcome and the work we fund in a monthly email.'
  );
  const styleDefault = text('style', 'light-blue');
  const typeDefault = text('type', 'corporate');

  return (
    <NewsletterSignup
      title={titleText}
      intro={introText}
      type={typeDefault}
      style={styleDefault}
    />
  );
};

const stories = storiesOf('Components|NewsletterSignup', module);

stories.add('NewsletterSignup', NewsletterSignupExample, {
  readme: { sidebar: Readme }
});
