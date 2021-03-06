import React from 'react';
import { shallow } from 'enzyme';

import FactCard from './FactCard';

describe('<FactCard />', () => {
  const output = shallow(
    <FactCard
      description="The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century."
      href="/news/our-response-covid-19-will-help-define-21st-century"
      title="Our response to COVID-19 will help define the 21st century"
      linkText="Optional text link"
    />
  );

  it('renders the component', () => {
    expect(output);
  });
});
