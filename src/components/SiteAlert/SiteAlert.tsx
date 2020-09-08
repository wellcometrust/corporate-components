import React from 'react';
import cx from 'classnames';

import Icon from 'Icon/Icon';

type SiteAlertProps = {
  handleDismiss?: () => void;
  isActive: boolean;
  text: string;
  url?: string;
};

export const SiteAlert = ({
  handleDismiss,
  isActive,
  text,
  url
}: SiteAlertProps) => {
  const classNames = cx('site-alert', {
    'is-active': isActive
  });

  const tabIndex = isActive ? 0 : -1;

  return (
    <div className={classNames}>
      <div className="site-alert__container">
        {url ? (
          <a
            href={url}
            className="site-alert__link no-external-marker"
            tabIndex={tabIndex}
          >
            {text}
            <Icon name="arrow" />
          </a>
        ) : (
          <p className="site-alert__text">{text}</p>
        )}
        <button
          className="site-alert__btn-close"
          onClick={handleDismiss}
          type="button"
          tabIndex={tabIndex}
        >
          Close
          <Icon name="closeBold" />
        </button>
      </div>
    </div>
  );
};

export default SiteAlert;
