import React, { useState } from 'react';
import cx from 'classnames';

import Link from 'Link';
import Icon from 'Icon';

type LinkListProps = {
  className?: string;
  links: LinkListItemProps[];
};

type LinkListItemProps = {
  text: string;
  href: string;
};

export const LinkList = ({ className, links }: LinkListProps) => {
  const classNames = cx('cc-link-list', {
    [`${className}`]: className
  });

  return (
    links?.length && (
      <ul className={classNames}>
        {links?.map(({ text, href, ...props }) => (
          <li className="cc-link-list__item" key={`list-links-item-${href}`}>
            <Link className="cc-link-list__link" to={href} {...props}>
              {text}
              <Icon name="chevron" className="cc-link-list__link-icon" />
            </Link>
          </li>
        ))}
      </ul>
    )
  );
};

export default LinkList;
