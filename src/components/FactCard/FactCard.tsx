import React from 'react';
import cx from 'classnames';

import Button from 'Button';
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
      {href && linkText && (
        <Button
          className="cc-cta-link"
          href={href}
          icon="arrowLong"
          iconPlacementSwitch
          variant="unstyled"
        >
          {linkText}
        </Button>
      )}
    </article>
  );
};

export default FactCard;
