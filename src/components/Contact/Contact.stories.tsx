import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Contact from './Contact';
import Readme from './Contact.md';

const ContactExample = () => {
  const contactName = text('name', 'Stuart Pritchard');
  const contactTitle = text('title', 'EU and Public Affairs Manager');
  const contactEmail = text('email', 's.pritchard@wellcome.ac.uk');
  const contactTel = text('tel', '');

  return (
    <Contact
      name={contactName}
      title={contactTitle}
      email={contactEmail}
      tel={contactTel}
    />
  );
};

const stories = storiesOf('Components|Contact', module);

stories.add('Contact', ContactExample, {
  readme: { sidebar: Readme }
});
