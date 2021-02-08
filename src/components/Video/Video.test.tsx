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
      '//www.youtube-nocookie.com/embed/Ha63EJhGoBw?wmode=opaque&modestbranding=1&rel=0&showinfo=0&color=white&autohide=1'
    );
  });

  it('returns an empty string if input is empty', () => {
    expect(outputEmpty).toBe(null);
  });
});

describe('<Video />', () => {
  const output = shallow(
    <Video src="video" caption="Video caption" credit="Video credit" />
  );

  it('renders the component', () => {
    expect(output);
  });
});
