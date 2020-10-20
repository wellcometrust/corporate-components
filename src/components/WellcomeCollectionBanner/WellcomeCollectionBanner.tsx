import React from 'react';
import cx from 'classnames';

import Icon from 'Icon/Icon';

type WellcomeCollectionBannerProps = {
  handleDismiss?: () => void;
  isActive: boolean;
};

export const WellcomeCollectionBanner = ({
  handleDismiss,
  isActive
}: WellcomeCollectionBannerProps) => {
  const bannerClassName = cx('wc-banner', {
    'is-active': isActive
  });

  const bannerTabIndex = isActive ? 0 : -1;

  return (
    <div className={bannerClassName}>
      <div className="wc-banner__container">
        <a
          href="https://wellcomecollection.org/?utm_source=wellcome&utm_medium=referral&utm_campaign=.org&utm_content=trusthomepage-text-banner"
          className="wc-banner__link no-external-marker"
          tabIndex={bannerTabIndex}
        >
          Looking for Wellcome Collection?
          <Icon name="arrow" />
        </a>

        <button
          className="wc-banner__btn-close"
          onClick={handleDismiss}
          type="button"
          tabIndex={bannerTabIndex}
        >
          Close
          <Icon name="closeBold" />
        </button>
      </div>
    </div>
  );
};

export default WellcomeCollectionBanner;
