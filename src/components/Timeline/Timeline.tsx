import React, { useEffect, useState } from 'react';
import cx from 'classnames';

type TimelineProps = {
  className?: string;
};

export const Timeline = ({ className }: TimelineProps) => {
  // const [isClient, setClient] = useState(false);

  const classNames = cx('cc-timeline', {
    [className]: className
  });

  return <div className={classNames}>Timeline</div>;
};

export default Timeline;
