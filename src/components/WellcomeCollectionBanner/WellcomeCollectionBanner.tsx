import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { CookiesProvider, useCookies } from 'react-cookie';

import Button from 'Button/Button';
import Icon from 'Icon/Icon';

const isBrowser = () => typeof window !== 'undefined';

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
    // cookies.cookieSeen === 'true' && // this live site cookie indicates user has consented to cookies
    isClient && cookies[IS_WELLCOME_COLLECTION_LINK_SEEN] !== 'true';

  const bannerClassName = cx('wc-banner', {
    'is-active': canShowCookieNotice()
  });

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
        >
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
