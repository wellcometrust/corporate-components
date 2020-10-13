import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import TagList from './TagList';

const TagListExample = () => {
  const tags = [
    {
      href: text('tag 1 href', '/what-we-do/our-work/coronavirus-covid-19'),
      id: '1',
      title: text('tag 1 title', 'Coronavirus (COVID-19)')
    },
    {
      href: text('tag 2 href', ''),
      id: '2',
      title: text('tag 2 title', 'Drug resistant infections')
    },
    {
      href: text('tag 3 href', '/what-we-do/our-work/snakebites'),
      id: '3',
      title: text('tag 3 title', 'Snakebites')
    }
  ];

  return <TagList tags={tags} />;
};

const stories = storiesOf('Components|Page header (articles)', module);

stories.add('TagList', TagListExample);
