import React from 'react';
import cx from 'classnames';

import Button from 'Button';
import Icon from 'Icon';

type CookieMessageProps = {
  handleItemClick?: () => void;
  isActive: boolean;
};

export const CookieMessage = ({
  handleItemClick,
  isActive
}: CookieMessageProps) => {
  return isActive ? (
    <div className="cookie-message">
      <p className="cookie-message__heading">
        <Icon
          className="cookie-message__heading-icon"
          name="cookie"
          height="1.375rem"
          width="1.25rem"
        />
        Cookies
      </p>
      <p className="cookie-message__text">
        Wellcome uses cookies to improve your experience.{' '}
        <a
          href="/about-us/governance/privacy-and-terms#cookies"
          className="cookie-message__text-link"
        >
          Find out more about cookies.
        </a>
      </p>
      <div className="cookie-message__buttons">
        <Button href="/cookies/config" variant="ghost">
          Manage preferences
        </Button>
        <Button href="#main" onClick={handleItemClick}>
          Accept and close
        </Button>
      </div>
    </div>
  ) : null;
};

export default CookieMessage;
