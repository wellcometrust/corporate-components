import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import PageHeader from './PageHeader';

const PageHeaderExample = () => {
  const background = select(
    'background',
    ['blue', 'transparent'],
    'transparent'
  );
  const className = text('classname', '');
  const meta = text('meta', '');
  const standfirst = text('standfirst', '');
  const title = text('title', 'Search Results');

  return (
    <PageHeader
      background={background}
      title={title}
      standfirst={standfirst}
      meta={meta}
      className={className}
    />
  );
};

const stories = storiesOf('Components|PageHeader', module);
stories.add('PageHeader', PageHeaderExample);
