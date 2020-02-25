import React from 'react';
import cx from 'classnames';

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
      <p className="message__heading">Cookies</p>
      <p className="cookie-message__text">
        Wellcome uses cookies to improve your experience.{' '}
        <a href="/about-us/governance/privacy-and-terms#cookies">
          Find out more about cookies.
        </a>
        <span className="cookie-message__buttons">
          <a href="/cookies/config" className="button--secondary">
            Manage preferences
          </a>
          <a
            href="#main"
            className="button--primary cookie-hide"
            onClick={handleItemClick}
          >
            Accept and close
          </a>
        </span>
      </p>
    </div>
  ) : null;
};

export default CookieMessage;
