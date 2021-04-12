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
  const classNames = cx('cc-skip-link__link', {
    'cc-skip-link__link--narrow': isNarrow,
    [className]: className
  });
  return (
    <div className="cc-skip-link">
      <a className={classNames} href={href}>
        {skipLinkText}
      </a>
    </div>
  );
};

export default SkipLink;
