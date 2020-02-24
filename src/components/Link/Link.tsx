import React, { useState, useEffect } from 'react';

import Icon from 'Icon';

type LinkProps = {
  className: string;
  to: string;
  children: React.ReactNode;
};

/**
 * Detect whether a given string (url) is going to
 * an external domain
 *
 * @param { string } url
 * @returns { boolean }
 */
const isExternalLink = (url: string) => {
  const isRelativeUrl = ['#', '/', '?'].includes(url.charAt(0));

  // Else test whether the current origin === destination URL
  const { origin } = window.location;
  const destination = url
    .replace('http://', '')
    .replace('https://', '')
    .split('/')[0];

  return !(origin === destination || isRelativeUrl);
};

/**
 * Displays an <a> tag with extra attributes depedendent on whether
 * href is an external domain.
 *
 * @param {ReactElement} children
 * @param {string}       className
 * @param {string}       to          Destination URL
 * @returns {ReactElement}
 * @constructor
 */
export const Link = ({ children, className, to, ...props }: LinkProps) => {
  const [isExternal, setExternal] = useState(null);

  // Ensures 'window' is present
  useEffect(() => {
    setExternal(isExternalLink(to));
  }, []);

  return isExternal ? (
    <a
      className={className}
      href={to}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
      <span className="u-visually-hidden">(opens in a new tab)</span>
      <span className="u-external-link-indicator">
        <Icon name="externalLink" height="0.85em" width="0.825em" />
      </span>
    </a>
  ) : (
    <a className={className} href={to} {...props}>
      {children}
    </a>
  );
};

export default Link;
