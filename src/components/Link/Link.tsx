/**
 * Generic Link element used for applying routing if it is available
 */
import React, { Children } from 'react';

type LinkProps = {
  children: React.ReactElement;
  href: string;
  RouterLink?: React.ReactType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  otherProps: any;
};

export const Link = ({ children, href, RouterLink, otherProps }: LinkProps) => {
  // if no RouterLink element type is specified it is assumed only the child component is rendered
  if (!RouterLink) {
    const child = Children.only(children);
    const CompType = child.type;

    return <CompType href={href}>{child.props.children}</CompType>;
  }

  return (
    <RouterLink href={href} {...otherProps}>
      {children}
    </RouterLink>
  );
};

export default Link;
