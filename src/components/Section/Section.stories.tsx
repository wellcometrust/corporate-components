import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';

import Section from './Section';
import Readme from './Section.md';

const SectionExample = () => {
  const sectionText = text(
    'text',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et optio eaque quas explicabo nulla asperiores eum placeat quo nam sequi provident possimus quos, adipisci doloremque nihil minus ab nobis illo.'
  );
  const type = select('type', ['div', 'section'], 'section');
  const hasAlternateStyle = boolean('hasAlternateStyle', false);

  return (
    <Section type={type} hasAlternateStyle={hasAlternateStyle}>
      <p>{sectionText}</p>
    </Section>
  );
};

const stories = storiesOf('Components|Section', module);

stories.add('Section', SectionExample, { readme: { sidebar: Readme } });
