/**
 * Generic Link wrapping component used for applying routing if it is available
 */
import React, { Children, forwardRef } from 'react';

type RouterLinkWrapperProps = {
  children: React.ReactElement;
  href: string;
  RouterLink?: React.ReactType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  otherProps?: any;
};

export const RouterLinkWrapper = forwardRef(
  (
    { children, href, RouterLink, otherProps }: RouterLinkWrapperProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    // if no RouterLink element type is specified only the child component is rendered
    if (!RouterLink) {
      const child = Children.only(children);
      const ChildComponentType = child.type;

      return (
        <ChildComponentType {...child.props} ref={ref}>
          {child.props.children}
        </ChildComponentType>
      );
    }

    return (
      <RouterLink href={href} {...otherProps} ref={ref}>
        {children}
      </RouterLink>
    );
  }
);

export default RouterLinkWrapper;
