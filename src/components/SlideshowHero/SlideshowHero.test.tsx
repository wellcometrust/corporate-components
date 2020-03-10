import * as React from 'react';
import { shallow } from 'enzyme';
import SlideshowHero from './SlideshowHero';

describe('<SlideshowHero />', () => {
  test('renders', () => {
    const wrapper = shallow(<SlideshowHero title="Wellcome" />);
    expect(wrapper);
  });
});
