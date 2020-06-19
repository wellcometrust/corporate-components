import React from 'react';
import { shallow } from 'enzyme';

import Section from './Section';

describe('<Section />', () => {
  const output = shallow(
    <Section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ea
        amet praesentium nesciunt ipsa veritatis consectetur porro obcaecati
        perspiciatis sit itaque, facilis iste pariatur, nemo rem quisquam
        accusamus esse molestias.
      </p>
    </Section>
  );

  it('renders the component', () => {
    expect(output);
  });
});
