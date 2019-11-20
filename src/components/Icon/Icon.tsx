import React from 'react';

// import iconTypes from './iconTypes';
import CircleCross from './components/CircleCross';

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
  // TODO: #5662 fix type checking
  // const IconElement: React.SFC = iconTypes[name];

  return (
    <div className={className} style={{ height, width }} aria-hidden="true">
      {/* <IconElement /> */}
      <CircleCross />
    </div>
  );
};

export default Icon;
