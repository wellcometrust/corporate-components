import React from 'react';
import { shallow } from 'enzyme';
import WellcomeCollectionBanner from './WellcomeCollectionBanner';

describe('<WellcomeCollectionBanner />', () => {
  const output = shallow(<WellcomeCollectionBanner />);

  it('renders the component', () => {
    expect(output);
  });
});
