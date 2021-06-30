import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import CTALink from './CTALink';

const CTALinkExample = () => {
  const linkText = text('button text', 'Click me');
  const href = text('href', '/about-us');

  return <CTALink href={href} text={linkText} />;
};

const stories = storiesOf('Components/CTA Link', module);

stories.add('CTA Link', CTALinkExample);
