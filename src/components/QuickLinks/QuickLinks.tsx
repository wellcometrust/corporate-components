import React from 'react';
import cx from 'classnames';

import Link from 'Link';

type QuickLinksProps = {
  className?: string;
  items: {
    href: string;
    label: string;
  }[];
};

export const QuickLinks = ({ className, items }: QuickLinksProps) => {
  const classNames = cx('c-quick-links', {
    className
  });

  return (
    <ul className={classNames}>
      {items.map(({ href, label }, i) => (
        <li className="c-quick-links__item" key={`quick-links-item-${i + 1}`}>
          <Link className="c-quick-links__item-link" to={href}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default QuickLinks;
