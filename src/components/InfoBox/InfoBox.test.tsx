import React from 'react';
import { shallow } from 'enzyme';

import InfoBox from './InfoBox';

describe('<InfoBox />', () => {
  const output = shallow(
    <InfoBox title="My heading">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa
        unde dicta delectus sint ut reprehenderit iure saepe sed velit non ab
        optio minus error dignissimos minima libero, fugit beatae.
      </p>
    </InfoBox>
  );

  it('renders the component', () => {
    expect(output);
  });
});
