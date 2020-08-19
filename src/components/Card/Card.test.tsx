import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('<Card />', () => {
  const meta = {
    date: '24 July 2020',
    type: 'Opinion'
  };
  const output = shallow(
    <Card
      description="The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century."
      href="/news/our-response-covid-19-will-help-define-21st-century"
      image={{
        alt: 'Image alt text',
        src: 'https://placehold.it/600x342'

        // TODO: handle responsive image sources
        // sources: {
        //   thumbnail_lo: 'https://placehold.it/300x171',
        //   thumbnail: 'https://placehold.it/600x342',
        //   thumbnail_hi: 'https://placehold.it/900x513'
        // }
      }}
      meta={meta}
      title="Our response to COVID-19 will help define the 21st century"
    />
  );

  it('renders the component', () => {
    expect(output);
  });
});
