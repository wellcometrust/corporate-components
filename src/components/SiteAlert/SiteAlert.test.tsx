import React from 'react';
import { shallow } from 'enzyme';
import { boolean } from '@storybook/addon-knobs';

import SiteAlert from './SiteAlert';

describe('<SiteAlert />', () => {
  const output = shallow(
    <SiteAlert
      isActive
      text="Visit the Wellcome Trust website"
      url="https://wellcome.org/"
    />
  );

  it('renders the component', () => {
    expect(output);
  });
});
