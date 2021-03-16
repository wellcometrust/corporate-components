import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Grid from 'Grid';
import Section from 'Section';
import SectionTitle from 'SectionTitle';
import InpageNav from './InpageNav';
import Readme from './InpageNav.md';

const sections = [
  {
    title: 'Section title 1',
    id: 'section-title-1'
  },
  {
    title: 'Section title 2',
    id: 'section-title-2'
  },
  {
    title: 'Very very very very very very very very long Section title 3',
    id: 'section-title-3'
  },
  {
    title: 'Section title 4',
    id: 'section-title-4'
  }
];

const InpageNavExample = () => {
  const isMinimal = boolean('isMinimal', false);

  return (
    <div>
      <InpageNav isMinimal={isMinimal} links={sections} />
      {sections.map(({ id, title }) => (
        <Section key={id}>
          <Grid>
            <div className="o-scaffold-grid-item">
              <SectionTitle id={id} title={title} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                illo provident fugit. Unde commodi maxime debitis, neque
                voluptatem ducimus eum, similique dolore minima voluptatibus
                culpa earum consectetur, ab error quam.
              </p>
            </div>
          </Grid>
        </Section>
      ))}
    </div>
  );
};

const stories = storiesOf('In-page navigation', module);

stories.add('InpageNav', InpageNavExample, {
  readme: { sidebar: Readme }
});
