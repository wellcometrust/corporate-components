import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './Icon';
import IconReadme from './Icon.md';

storiesOf('Components|Icon', module).add(
  'Icons',
  () => (
    <div>
      <p>Arrow</p>
      <Icon name="arrow" />
      <p>ArrowLong</p>
      <Icon name="arrowLong" />
      <p>Checkmark</p>
      <Icon name="checkmark" />
      <p>Chevron</p>
      <Icon name="chevron" />
      <p>Chevron down</p>
      <Icon name="chevronDown" />
      <p>Chevron right</p>
      <Icon name="chevronRight" />
      <p>Chevron up</p>
      <Icon name="chevronUp" />
      <p>Close</p>
      <Icon name="close" />
      <p>Close bold</p>
      <Icon name="closeBold" />
      <p>Close (cross in circle)</p>
      <Icon name="closeCircle" />
      <p>Cookie</p>
      <Icon name="cookie" />
      <p>Download</p>
      <Icon name="download" />
      <p>Email</p>
      <Icon name="email" />
      <p>External link</p>
      <Icon name="externalLink" />
      <p>Exclamation mark</p>
      <Icon name="exclamationMark" />
      <p>Facebook button for share or follow</p>
      <Icon name="facebook" />
      <p>LinkedIn button for share or follow</p>
      <Icon name="linkedin" />
      <p>Info</p>
      <Icon name="info" />
      <p>Message</p>
      <Icon name="message" />
      <p>Phone</p>
      <Icon name="phone" />
      <p>Search</p>
      <Icon name="search" />
      <p>Share link</p>
      <Icon name="shareLink" />
      <p>Tag</p>
      <Icon name="tag" />
      <p>Twitter button for share or follow</p>
      <Icon name="twitter" />
      <p>YouTube button for share or follow</p>
      <Icon name="youTube" />
    </div>
  ),
  { readme: { sidebar: IconReadme } }
);
