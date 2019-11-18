import React from 'react';

// import { iconTypes } from './iconTypes';

type IconProps = {
  className?: string;
  height?: string;
  name: string;
  width?: string;
};

export const Icon = ({
  className,
  name,
  width = '1rem',
  height = '1rem'
}: IconProps) => {
  // const Element = iconTypes[name];

  return (
    <div className={className} style={{ height, width }} aria-hidden="true">
      {/* <Element role="img" /> */}
      {`${name.toUpperCase()} - ICON`}
    </div>
  );
};

export default Icon;
