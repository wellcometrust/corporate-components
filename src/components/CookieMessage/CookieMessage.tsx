import React from 'react';

import Button from 'Button';
import Icon from 'Icon';

type CookieMessageProps = {
  handleDismiss?: () => void;
  isActive: boolean;
};

export const CookieMessage = ({
  handleDismiss,
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
        <Button
          className="cookie-message__button"
          href="/cookies/config"
          variant="ghost"
        >
          Manage preferences
        </Button>
        <Button
          className="cookie-message__button"
          href="#main"
          onClick={handleDismiss}
        >
          Accept and close
        </Button>
      </div>
    </div>
  ) : null;
};

export default CookieMessage;
