import React from 'react';

import Icon from 'Icon';

const ExternalLinkIndicator = () => (
  <>
    <span className="u-visually-hidden">(opens in a new tab)</span>
    <span className="u-external-link-indicator">
      <Icon name="externalLink" height="0.85em" width="0.825em" />
    </span>
  </>
);

export default ExternalLinkIndicator;
