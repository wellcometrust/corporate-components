import React from 'react';
import cx from 'classnames';

type SectionTitleProps = {
  className?: string;
  id?: string;
  title: string;
};

export const SectionTitle = ({ className, id, title }: SectionTitleProps) => {
  const classNames = cx('cc-section__title', {
    [`${className}`]: className
  });

  return (
    <h2 className={classNames}>
      {title}
      <span id={id} className="cc-section__title-anchor">
        &nbsp;
      </span>
    </h2>
  );
};

export default SectionTitle;
