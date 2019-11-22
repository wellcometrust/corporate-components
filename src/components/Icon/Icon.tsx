import React from 'react';

import iconMapping from './iconMapping';

type IconProps = {
  className?: string;
  height?: string;
  name: string;
  width?: string;
};

export type IconSVGProps = {
  role?: string;
  title?: string;
};

export const Icon = ({
  className,
  name,
  height = '1rem',
  width = '1rem'
}: IconProps) => {
  const isIcon = iconMapping.has(name);
  const IconElement = iconMapping.get(name);

  return isIcon ? (
    <div className={className} style={{ height, width }} aria-hidden="true">
      <IconElement />
    </div>
  ) : null;
};

export default Icon;
