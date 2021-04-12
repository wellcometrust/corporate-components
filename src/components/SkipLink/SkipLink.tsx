import React from 'react';
import cx from 'classnames';

type SkipLinkProps = {
  className?: string;
  href: string;
  isNarrow?: boolean;
  skipLinkText: string;
};

export const SkipLink = ({
  className,
  href,
  isNarrow,
  skipLinkText
}: SkipLinkProps) => {
  const classNames = {
    wrapper: cx('cc-skip-link', {
      [className]: className
    }),
    link: cx('cc-skip-link__link', {
      'cc-skip-link__link--narrow': isNarrow
    })
  };

  return (
    <div className={classNames.wrapper}>
      <a className={classNames.link} href={href}>
        {skipLinkText}
      </a>
    </div>
  );
};

export default SkipLink;
