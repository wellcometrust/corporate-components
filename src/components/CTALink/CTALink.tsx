/**
 * @file CTA Link component; wrapper for Button component with updated styles
 * and which should only be used when HTML element should be an <a> tag.
 */
import React from 'react';
import cx from 'classnames';

import Button from 'Button';

type CTALinkProps = {
  className?: string;
  href: string;
  text: string;
};

/**
 * CTALink component; wraps the Button element and always returns
 * an `<a>` tag with "CTA Link" styles.
 *
 * @param {string} className
 * @param {string} href
 * @param {string} text
 *
 * @returns {ReactElement}
 */
export const CTALink = ({ className, href, text }: CTALinkProps) => {
  const classNames = cx('cc-cta-link', {
    [className]: className
  });

  return (
    <Button
      className={classNames}
      href={href}
      icon="arrowLong"
      iconPlacementSwitch
      variant="unstyled"
    >
      {text}
    </Button>
  );
};

export default CTALink;
