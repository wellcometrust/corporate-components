import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import SlideshowHero from './SlideshowHero';

const SlideshowHeroExample = () => {
  const background = select(
    'background',
    ['blue', 'transparent'],
    'transparent'
  );
  const className = text('classname', '');
  const standfirst = text('standfirst', '');
  const title = text('title', 'Search Results');

  return (
    <SlideshowHero
      className={className}
      standfirst={standfirst}
      title={title}
    />
  );
};

const stories = storiesOf('Components|SlideshowHero', module);
stories.add('SlideshowHero', SlideshowHeroExample);
