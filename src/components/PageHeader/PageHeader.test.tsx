import * as React from 'react';
import { shallow } from 'enzyme';
import PageHeader from './PageHeader';

describe('<PageHeader />', () => {
  test('renders', () => {
    const wrapper = shallow(<PageHeader title="Search results" />);
    expect(wrapper);
  });
});
