import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Accordion, { AccordionItem } from './Accordion';
import Readme from './Accordion.md';

const AccordionExample = () => {
  const content = text('children', 'Accordion item content');
  const title = text('title', 'Heading text default');
  const titleActive = text('titleActive (optional)', 'Heading text active');

  return (
    <Accordion>
      <AccordionItem title={title} titleActive={titleActive}>
        {content}
      </AccordionItem>
    </Accordion>
  );
};

storiesOf('Components|Accordion', module).add('Accordion', AccordionExample, {
  readme: { sidebar: Readme }
});
