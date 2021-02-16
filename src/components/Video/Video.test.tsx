import React from 'react';
import { shallow } from 'enzyme';

import Video, { getYoutubeEmbedUrl } from './Video';

describe('getYoutubeEmbedUrl', () => {
  const outputValid = getYoutubeEmbedUrl(
    'https://www.youtube.com/watch?v=Ha63EJhGoBw&feature=youtu.be'
  );
  const outputEmpty = getYoutubeEmbedUrl('');

  it('returns a correctly formatted YouTube embed code', () => {
    expect(outputValid).toBe(
      '//www.youtube.com/embed/Ha63EJhGoBw?wmode=opaque&modestbranding=1&rel=0&showinfo=0&color=white&autohide=1'
    );
  });

  it('returns an empty string if input is empty', () => {
    expect(outputEmpty).toBe(null);
  });
});

describe('<Video />', () => {
  const output = shallow(
    <Video
      caption="Video caption"
      credit="Video credit"
      id="video"
      src="video"
    />
  );

  it('renders the component', () => {
    expect(output);
  });
});
