/**
 * WORK IN PROGRESS
 * Wrapper for routing <Link> component used to highlight the current page in the navigation
 */
import React, { Children, cloneElement } from 'react';
import cx from 'classnames';

// TODO:
// import Link from '../Link/Link';
import { RouterLinkWrapper as Link } from 'RouterLinkWrapper/RouterLinkWrapper';

// TODO: resolve router dependency https://github.com/wellcometrust/corporate/issues/5181
// import withRouter from './withRouter';

type routerProps = {
  pathname: string;
};

type ActiveLinkProps = {
  router?: routerProps;
  children: React.ReactElement;
  href: string;
  activeClassName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  otherProps: any;
};

export const ActiveLink = ({
  router,
  children,
  href,
  activeClassName,
  ...otherProps
}: ActiveLinkProps) => {
  const child = Children.only(children);
  const className = cx(child.props.className, {
    [activeClassName]: router?.pathname === href && activeClassName
  });

  return (
    <Link href={href} {...otherProps}>
      {cloneElement(child, { className })}
    </Link>
  );
};

// TODO: resolve router dependency https://github.com/wellcometrust/corporate/issues/5181
// export default withRouter(ActiveLink);
export default ActiveLink;
