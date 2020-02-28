import React from 'react';
import cx from 'classnames';

import navLinkData from 'data/default-site-links.json';

import NavLinks from 'Nav/NavLinks';

import HeaderNavMobileHeader from './HeaderNavMobileHeader';

type HeaderNavProps = {
  isActive?: boolean;
};

export const HeaderNav = ({ isActive }: HeaderNavProps) => {
  const classNames = cx('header-nav', {
    'is-active': isActive
  });

  return (
    <div className={classNames} id="main-nav">
      <HeaderNavMobileHeader />
      <nav>
        <NavLinks data={navLinkData} level={1} />
      </nav>
    </div>
  );
};

export default HeaderNav;
