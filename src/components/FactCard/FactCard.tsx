import React from 'react';
import cx from 'classnames';

import CTALink from 'CTALink';
import RichText from 'RichText';

type FactCardProps = {
  className?: string;
  description?: string;
  href?: string;
  linkText?: string;
  title?: string;
  titleAs?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const FactCard = ({
  className,
  description,
  href,
  linkText,
  title,
  titleAs = 'h3'
}: FactCardProps) => {
  const TitleElement = titleAs;
  const classNames = cx('cc-fact-card', {
    [className]: className
  });

  return (
    <article className={classNames}>
      <TitleElement className="cc-fact-card__title" itemProp="name">
        {title}
      </TitleElement>
      {description && (
        <RichText className="cc-fact-card__description" itemProp="abstract">
          {description}
        </RichText>
      )}
      {href && linkText && <CTALink href={href} text={linkText} />}
    </article>
  );
};

export default FactCard;
