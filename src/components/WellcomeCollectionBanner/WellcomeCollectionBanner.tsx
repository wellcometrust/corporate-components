import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { CookiesProvider, useCookies } from 'react-cookie';

import Icon from 'Icon/Icon';

/**
 * List of page paths on which the banner will appear
 *
 * @const {string[]}
 */
const bannerPaths = [
  '/how-we-work',
  '/about-us/contact-us',
  '/about-us/history-wellcome'
];

export const WellcomeCollectionLink = () => {
  const IS_WELLCOME_COLLECTION_LINK_SEEN = 'isWellcomeCollectionLinkSeen';
  const [cookies, setCookie] = useCookies([IS_WELLCOME_COLLECTION_LINK_SEEN]);
  const [isClient, setIsClient] = useState(false);

  const handleItemClick = () => {
    setCookie(IS_WELLCOME_COLLECTION_LINK_SEEN, 'true', {
      path: '/',
      maxAge: 31536000
    });
  };

  const canShowCookieNotice = () =>
    isClient &&
    // cookies.cookieSeen === 'true' && // this live site cookie indicates user has consented to cookies
    cookies[IS_WELLCOME_COLLECTION_LINK_SEEN] !== 'true' &&
    bannerPaths.includes(window.location.pathname);

  const bannerClassName = cx('wc-banner', {
    'is-active': canShowCookieNotice()
  });

  const bannerTabIndex = canShowCookieNotice() ? 0 : -1;

  useEffect(() => {
    setIsClient(true);

    return () => {};
  }, []);

  return (
    <div className={bannerClassName}>
      <div className="wc-banner__container">
        <a
          href="https://wellcomecollection.org/?utm_source=wellcome&utm_medium=referral&utm_campaign=.ac.uk&utm_content=trusthomepage-text-banner"
          className="wc-banner__link"
          tabIndex={bannerTabIndex}
        >
          Looking for Wellcome Collection?
          <Icon name="arrow" />
        </a>

        <button
          className="wc-banner__btn-close"
          onClick={handleItemClick}
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

export const WellcomeCollectionBanner = () => {
  return (
    <CookiesProvider>
      <WellcomeCollectionLink />
    </CookiesProvider>
  );
};

export default WellcomeCollectionBanner;
