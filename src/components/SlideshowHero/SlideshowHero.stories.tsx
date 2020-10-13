import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';

import SlideshowHero from './SlideshowHero';
import Readme from './SlideshowHero.md';

const SlideshowHeroExample = () => {
  const animationDuration = number('animationDuration', 2000);
  const className = text('classname', '');
  const moreLink = text('moreLink', '/');
  const moreLinkText = text('moreLinkText', 'Learn more');
  const skipLink = text('skipLink', '#main-content');
  const skipLinkText = text('skipLinkText', 'Skip to main content');
  const slides = [
    {
      caption: text('slide 1 caption', 'Caption for slide 1'),
      credit: text('slide 1 credit', 'Image © my image 1')
    },
    {
      caption: text('slide 2 caption', 'Caption for slide 2'),
      credit: text('slide 2 credit', 'Image © my image 2')
    }
  ];
  const standfirst = text('standfirst', 'Standfirst');
  const title = text('title', 'Hero title');

  const images = slides.map((slide, index) => ({
    caption: slide.caption,
    credit: slide.credit,
    fallbackImage: 'https://placehold.it/1000x1000&text=Slide+1+medium+image',
    id: `img${index}`,
    imageSources: [
      {
        sourceType: 'image/jpeg',
        sourceMedia: '(max-width: 767px)',
        sourcePreload: `https://placehold.it/75x40&text=Slide+${index +
          1}+mobile+image`,
        sourceFull: `https://placehold.it/768x402&text=Slide+${index +
          1}+mobile+image`
      },
      {
        sourceType: 'image/jpeg',
        sourceMedia: '(min-width: 768px) and (max-aspect-ratio: 16/9)',
        sourcePreload: `https://placehold.it/100x100&text=Slide+${index +
          1}+medium+image`,
        sourceFull: `https://placehold.it/1000x1000&text=Slide+${index +
          1}+medium+image`
      },
      {
        sourceType: 'image/jpeg',
        sourceMedia: '(min-aspect-ratio: 16/9)',
        sourcePreload: `https://placehold.it/120x80&text=Slide+${index +
          1}+wide+image`,
        sourceFull: `https://placehold.it/1200x800&text=Slide+${index +
          1}+wide+image`
      }
    ]
  }));

  return (
    <SlideshowHero
      animationDuration={animationDuration}
      className={className}
      images={images}
      moreLink={moreLink}
      moreLinkText={moreLinkText}
      skipLink={skipLink}
      skipLinkText={skipLinkText}
      standfirst={standfirst}
      title={title}
    />
  );
};

const stories = storiesOf('Components|SlideshowHero', module);

stories.add('SlideshowHero', SlideshowHeroExample, {
  readme: { sidebar: Readme }
});
