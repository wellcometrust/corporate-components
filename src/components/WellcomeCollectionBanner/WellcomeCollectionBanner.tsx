import React from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { Icon } from 'Icon/Icon';

export const WellcomeCollectionLink = () => {
  const IS_WELLCOME_COLLECTION_LINK_SEEN = 'isWellcomeCollectionLinkSeen';
  const [cookies, setCookie] = useCookies([IS_WELLCOME_COLLECTION_LINK_SEEN]);

  const handleItemClick = () => {
    // setCookie(IS_WELLCOME_COLLECTION_LINK_SEEN, 'true', { path: '/', maxAge: 31536000 });
  };

  const bannerClassName =
    cookies[IS_WELLCOME_COLLECTION_LINK_SEEN] === 'true'
      ? 'wc-banner'
      : 'wc-banner is-active';

  return (
    <div className={bannerClassName}>
      <a href="https://wellcomecollection.org" className="wc-banner__link">
        Looking for Wellcome Collection?
      </a>
      <button
        className="wc-banner__btn-close"
        onClick={handleItemClick}
        type="button"
      >
        <span>Test Close</span>
        <Icon name="close" />
      </button>
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
