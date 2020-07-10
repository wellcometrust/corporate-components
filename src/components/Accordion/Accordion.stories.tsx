import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Accordion, { AccordionItem } from './Accordion';
import Readme from './Accordion.md';

const AccordionExample = () => {
  const title = text('title', 'Heading text');
  const content = text('children', 'Accordion item content');

  return (
    <Accordion>
      <AccordionItem title={title}>{content}</AccordionItem>
    </Accordion>
  );
};

storiesOf('Components|Accordion', module).add('Accordion', AccordionExample, {
  readme: { sidebar: Readme }
});
