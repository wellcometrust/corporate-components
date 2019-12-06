import React from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';

import Button from 'Button/Button';
import Icon from 'Icon/Icon';

export const WellcomeCollectionLink = () => {
  const IS_WELLCOME_COLLECTION_LINK_SEEN = 'isWellcomeCollectionLinkSeen';
  const [cookies, setCookie] = useCookies([IS_WELLCOME_COLLECTION_LINK_SEEN]);

  const handleItemClick = () => {
    setCookie(IS_WELLCOME_COLLECTION_LINK_SEEN, 'true', {
      path: '/',
      maxAge: 31536000
    });
  };

  const checkCookies = () =>
    // cookies.cookieSeen === 'true' && // this live site cookie indicates user has consented to cookies
    cookies[IS_WELLCOME_COLLECTION_LINK_SEEN] !== 'true';

  const wcBannerClassName = checkCookies()
    ? 'wc-banner is-active'
    : 'wc-banner';

  return (
    <div className={wcBannerClassName}>
      <div className="wc-banner__container">
        <a href="https://wellcomecollection.org" className="wc-banner__link">
          Looking for Wellcome Collection?
        </a>
        <button
          className="wc-banner__btn-close"
          onClick={handleItemClick}
          type="button"
        >
          Close
          <Icon name="close" height="14px" width="14px" />
        </button>
      </div>
    </div>
  );
};

export const WellcomeCollectionBanner = () => {
  return (
    <CookiesProvider>
      <WellcomeCollectionLink />
    </CookiesProvider>
  );
};

export default WellcomeCollectionBanner;
