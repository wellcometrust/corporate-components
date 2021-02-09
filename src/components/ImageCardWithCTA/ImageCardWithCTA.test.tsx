import React from 'react';
import { shallow } from 'enzyme';

import ImageCardWithCTA from './ImageCardWithCTA';

describe('<ImageCardWithCTA />', () => {
  const output = shallow(
    <ImageCardWithCTA
      description="The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century."
      href="/news/our-response-covid-19-will-help-define-21st-century"
      imageAlt="Image alt tag"
      imageSrc="https://via.placeholder.com/300"
      linkText="Optional text link"
      title="Our response to COVID-19 will help define the 21st century"
      titleAs="h3"
    />
  );

  it('renders the component', () => {
    expect(output);
  });
});
