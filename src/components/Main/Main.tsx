import React from 'react';
import cx from 'classnames';

type MainProps = {
  children: React.ReactNode;
  className?: string;
};

export const Main = ({ children, className }: MainProps) => {
  const classNames = cx('main o-app', {
    [`${className}`]: className
  });

  return (
    <main id="main" className={classNames} role="main">
      {children}
    </main>
  );
};

export default Main;
