import React from 'react';
import { shallow } from 'enzyme';
import GalleryLightBox from './GalleryLightBox';

describe('<GalleryLightBox />', () => {
  const output = shallow(<GalleryLightBox slides={[]} />);

  it('renders the component', () => {
    expect(output);
  });
});
