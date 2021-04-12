import React from 'react';

import Icon from 'Icon';
import VisuallyHidden from 'VisuallyHidden';

const ExternalLinkIndicator = () => (
  <>
    <VisuallyHidden>(opens in a new tab)</VisuallyHidden>
    <span className="u-external-link-indicator">
      <Icon name="externalLink" height="0.85em" width="0.825em" />
    </span>
  </>
);

export default ExternalLinkIndicator;
