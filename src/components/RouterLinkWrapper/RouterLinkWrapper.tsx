/**
 * Generic Link wrapping component used for applying routing if it is available
 */
import React, { Children } from 'react';

type RouterLinkWrapperProps = {
  children: React.ReactElement;
  href: string;
  RouterLink?: React.ReactType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  otherProps: any;
};

export const RouterLinkWrapper = ({
  children,
  href,
  RouterLink,
  otherProps
}: RouterLinkWrapperProps) => {
  // if no RouterLink element type is specified only the child component is rendered
  if (!RouterLink) {
    const child = Children.only(children);
    const ChildComponentType = child.type;

    return (
      <ChildComponentType href={href}>
        {child.props.children}
      </ChildComponentType>
    );
  }

  return (
    <RouterLink href={href} {...otherProps}>
      {children}
    </RouterLink>
  );
};

export default RouterLinkWrapper;
