import React from 'react';

type SectionTitleProps = {
  id?: string;
  title: string;
};

export const SectionTitle = ({ id, title }: SectionTitleProps) => (
  <h2 className="cc-section__title" id={id}>
    {title}
  </h2>
);

export default SectionTitle;
