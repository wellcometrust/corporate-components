import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Contact from './Contact';
import Readme from './Contact.md';

const ContactExample = () => {
  const contactName = text('name', 'Ella Smith');
  const contactTitle = text(
    'title',
    `
    <h3>Head of Our Planet, Our Health</h3>
    <p>A sentence about my role and responsibilities. Maybe two sentences.</p>
  `
  );
  const contactEmail = text('email', 'e.smith@wellcome.org');
  const contactTel = text('tel', '');

  return (
    <Contact
      email={contactEmail}
      name={contactName}
      contactRole={contactTitle}
      tel={contactTel}
    />
  );
};

const stories = storiesOf('Components/Contact', module);

stories.add('Contact', ContactExample, {
  readme: { sidebar: Readme }
});
