import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('<Main />', () => {
  const output = shallow(
    <Main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ea
        amet praesentium nesciunt ipsa veritatis consectetur porro obcaecati
        perspiciatis sit itaque, facilis iste pariatur, nemo rem quisquam
        accusamus esse molestias.
      </p>
    </Main>
  );

  it('renders the component', () => {
    expect(output);
  });
});
