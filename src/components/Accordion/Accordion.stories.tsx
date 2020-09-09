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
    <>
      <Accordion>
        <AccordionItem
          title={title}
          titleActive={titleActive}
          variant="chevron"
        >
          {content}
        </AccordionItem>
      </Accordion>
      <br />
      <p>Accordion - the siblings closed when one is open</p>
      <Accordion>
        {[1, 2, 3, 4].map(data => (
          <AccordionItem title={`${title} ${data}`}>
            {`${content} ${data}`}
          </AccordionItem>
        ))}
      </Accordion>
      <br />
      <p>Accordion - stay open until closed</p>
      <Accordion>
        <AccordionItem
          title="Long title closed consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque."
          variant="plus"
        >
          {content}
        </AccordionItem>
      </Accordion>
      <Accordion>
        <AccordionItem title={title}>{content}</AccordionItem>
      </Accordion>
      <Accordion>
        <AccordionItem title={title}>{content}</AccordionItem>
      </Accordion>
    </>
  );
};

storiesOf('Components|Accordion', module).add('Accordion', AccordionExample, {
  readme: { sidebar: Readme }
});
