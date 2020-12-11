import React from 'react';
import { shallow } from 'enzyme';
import Iframe from './Iframe';

describe('<Iframe />', () => {
  const output = shallow(
    <Iframe
      src="https://www.example.com"
      width={640}
      height={480}
      title="An example"
    />
  );

  it('renders the component', () => {
    expect(output);
  });

  it('sets container padding-top to aspect ratio', () => {
    const { paddingTop } = output.props().style;
    expect(paddingTop).toEqual('75.00%');
  });

  it('does not specify iframe element width/height', () => {
    const iframeProps = output.find('iframe').props();
    expect('width' in iframeProps).toBeFalsy();
    expect('height' in iframeProps).toBeFalsy();
  });

  it('sets iframe src and title', () => {
    const iframeProps = output.find('iframe').props();
    expect(iframeProps.title).toEqual('An example');
    expect(iframeProps.src).toEqual('https://www.example.com');
  });
});
