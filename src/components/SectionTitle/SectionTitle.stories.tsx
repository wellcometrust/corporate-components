import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import SectionTitle from './SectionTitle';
import Readme from './SectionTitle.md';

const SectionTitleExample = () => {
  const sectionTitleText = text('Title', 'My section');

  return <SectionTitle title={sectionTitleText} />;
};

const stories = storiesOf('Components/SectionTitle', module);

stories.add('SectionTitle', SectionTitleExample, {
  readme: { sidebar: Readme }
});
