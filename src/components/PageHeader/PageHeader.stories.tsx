import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import PageHeader from './PageHeader';

const PageHeaderExample = () => {
  const title = text('title', 'Search Results');
  const meta = text('meta', '');
  const standfirst = text('standfirst', '');
  const className = text('classname', '');

  return (
    <PageHeader
      title={title}
      standfirst={standfirst}
      meta={meta}
      className={className}
    />
  );
};

const stories = storiesOf('Components|PageHeader', module);
stories.add('PageHeader', PageHeaderExample);
