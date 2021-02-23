import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';

import QuickLinks from './QuickLinks';

const QuickLinksExample = () => {
  const className = text('className', '', 'General');
  const numberOfItems = number('numberOfItems', 5, {}, 'General');

  const initialItems = [
    {
      href: '/grant-funding',
      label: 'Find funding opportunities'
    },
    {
      href: '/grant-tracker',
      label: 'Log in to Grant Tracker'
    },
    {
      href: 'https://wtgrants.wellcome.org/Login.aspx',
      label: 'Read funding guidance'
    },
    {
      href: '/grant-funding/guidance',
      label: 'Learn about Wellcome'
    },
    {
      href:
        '/grant-funding/guidance/coronavirus-covid-19-information-grant-applicants-and-grantholders',
      label: 'Read COVID-19 information for grantholders and grant applicants'
    }
  ];
  const items = [...Array(numberOfItems).keys()].map(i => ({
    href: text('href (url)', initialItems[i].href, `Item ${i + 1}`),
    label: text('label', initialItems[i].label, `Item ${i + 1}`)
  }));

  return <QuickLinks className={className} items={items} />;
};

const stories = storiesOf('QuickLinks', module);

stories.add('QuickLinks', QuickLinksExample);
