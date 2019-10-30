// @flow
import React, { Children, cloneElement } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import withRouter from './withRouter';

const ActiveLink = ({
  router,
  children,
  href,
  activeClassName,
  ...otherProps
}) => {
  const child = Children.only(children);
  const className = cx(child.props.className, {
    [activeClassName]: router && router.pathname === href && activeClassName
  });

  return process.env.ENV_TYPE !== 'd7' ? (
    <Link href={href} {...otherProps}>
      {cloneElement(child, { className })}
    </Link>
  ) : (
    cloneElement(child, { className })
  );
};

export default withRouter(ActiveLink);
