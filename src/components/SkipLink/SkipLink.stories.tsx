import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import SkipLink from 'SkipLink';

const SkipLinkExample = () => {
  const skipLinkText = text('text', 'Skip to main content');
  const isNarrow = boolean('isNarrow', true);

  return (
    <>
      <p>
        To view the skip link component tab to this example, or click inside
        this example and press tab.
      </p>

      <SkipLink href="#" isNarrow={isNarrow} skipLinkText={skipLinkText} />
    </>
  );
};

const stories = storiesOf('SkipLink', module);

stories.add('SkipLink', SkipLinkExample);
