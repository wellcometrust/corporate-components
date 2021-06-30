import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './Icon';
import IconReadme from './Icon.md';

storiesOf('Global/Icons', module).add(
  'Icons',
  () => (
    <div>
      <p>Arrow</p>
      <Icon name="arrow" />
      <p>ArrowMedium</p>
      <Icon name="arrowMedium" />
      <p>ArrowLong</p>
      <Icon name="arrowLong" />
      <p>ArrowReverse</p>
      <Icon name="arrowReverse" />
      <p>Checkmark</p>
      <Icon name="checkmark" />
      <p>Chevron</p>
      <Icon name="chevron" />
      <p>Close</p>
      <Icon name="close" />
      <p>Close medium</p>
      <Icon name="closeMedium" />
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
      <p>Info</p>
      <Icon name="info" />
      <p>LinkedIn button for share or follow</p>
      <Icon name="linkedin" />
      <p>Message</p>
      <Icon name="message" />
      <p>Phone</p>
      <Icon name="phone" />
      <p>Plus</p>
      <Icon name="plus" />
      <p>Search</p>
      <Icon name="search" />
      <p>Share link</p>
      <Icon name="shareLink" />
      <p>Tag</p>
      <Icon name="tag" />
      <p>Tick</p>
      <Icon name="tick" />
      <p>Twitter button for share or follow</p>
      <Icon name="twitter" />
      <p>Update</p>
      <Icon name="update" />
      <p>Upload button for file inputs</p>
      <Icon name="upload" />
      <p>YouTube button for share or follow</p>
      <Icon name="youTube" />
    </div>
  ),
  { readme: { sidebar: IconReadme } }
);
