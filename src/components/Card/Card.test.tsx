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
      date={meta.date}
      description="The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century."
      href="/news/our-response-covid-19-will-help-define-21st-century"
      imageAlt="Image alt text"
      imageSrc="https://placehold.it/600x342"
      metaLabel={meta.type}
      title="Our response to COVID-19 will help define the 21st century"
      variant="horizontal_card"
    />
  );

  it('renders the component', () => {
    expect(output);
  });
});
