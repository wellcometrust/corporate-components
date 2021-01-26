import React from 'react';
import cx from 'classnames';

import RichText from 'RichText';
import Link from 'Link';

type StatisticCardProps = {
  className?: string;
  description?: string;
  href?: string;
  linkTitle?: string;
  title?: string;
  titleAs?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const StatisticCard = ({
  className,
  description,
  href,
  linkTitle,
  title,
  titleAs = 'h3'
}: StatisticCardProps) => {
  const TitleElement = titleAs;
  const classNames = cx('cc-statistic-card', {
    [className]: className
  });

  return (
    <article className={classNames}>
      <TitleElement className="cc-statistic-card__title" itemProp="name">
        {title}
      </TitleElement>
      {description && (
        <RichText
          className="cc-statistic-card__description"
          itemProp="abstract"
        >
          {description}
        </RichText>
      )}
      {linkTitle && (
        <Link className="cc-statistic-card__link" to={href}>
          {linkTitle} &#10230;
        </Link>
      )}
    </article>
  );
};

export default StatisticCard;
