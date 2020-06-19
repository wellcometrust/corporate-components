import React from 'react';
import { shallow } from 'enzyme';
import { boolean } from '@storybook/addon-knobs';

import WellcomeCollectionBanner from './WellcomeCollectionBanner';

describe('<WellcomeCollectionBanner />', () => {
  const output = shallow(<WellcomeCollectionBanner isActive />);

  it('renders the component', () => {
    expect(output);
  });
});
