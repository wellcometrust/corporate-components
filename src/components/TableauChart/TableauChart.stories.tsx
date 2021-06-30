import React from 'react';
import { storiesOf } from '@storybook/react';

import TableauChart from './TableauChart';
import Readme from './TableauChart.md';

const TableauChartExample = () => {
  return <TableauChart embed="" />;
};

const stories = storiesOf('Components/TableauChart', module);

stories.add('TableauChart', TableauChartExample, {
  readme: { sidebar: Readme }
});
