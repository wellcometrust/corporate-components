import React, { useContext, useState } from 'react';
import classNames from 'classnames';

import ViewportContext from 'ViewportContext/ViewportContext';
import Icon from 'Icon/Icon';
import { ActiveLink as Link } from './ActiveLink';

type Props = {
  className?: string;
  level: number;
  parentUrl?: string;
  parentText?: string;
  text: string;
  url: string;
  children?: React.ReactNode;
};

export const NavItem = ({
  className,
  level,
  parentUrl,
  parentText,
  text,
  url,
  children
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const { isMobile } = useContext(ViewportContext);

  const itemClasses = classNames('nav__item', className, {
    'has-children': children
  });

  const childClasses = classNames('nav__pane', 'nav-secondary', {
    'is-active': isActive
  });

  const handleItemClick = (e: React.MouseEvent) => {
    if (children && isMobile) {
      e.preventDefault();
      setIsActive(!isActive);
    }
  };

  const itempath = parentText ? `${parentText}__${text}` : `${text}`;

  return (
    <li className={itemClasses}>
      <Link href={url} activeClassName="active">
        <a
          className="nav__link"
          data-level={level}
          data-parent={parentUrl}
          data-itempath={itempath}
          href={url}
          onClick={handleItemClick}
        >
          <span className="nav__link-text">{text}</span>
          {children && <Icon name="chevron" />}
        </a>
      </Link>
      {children && (
        <div className={childClasses}>
          <button
            type="button"
            onClick={handleItemClick}
            className="nav__btn--back"
          >
            <Icon name="chevron" />
            Back to menu
          </button>
          {children}
        </div>
      )}
    </li>
  );
};

export default NavItem;
