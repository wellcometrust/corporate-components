import React from 'react';
import cx from 'classnames';

type SectionTitleProps = {
  id?: string;
  title: string;
};

export const SectionTitle = ({ id, title }: SectionTitleProps) => {
  return (
    <h2 className="cc-section__title" id={id}>
      {title}
    </h2>
  );
};

export default SectionTitle;
