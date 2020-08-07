import React from 'react';
import cx from 'classnames';

type CardProps = {
  className?: string;
  href: string;
  id?: string;
  title: string;
};

export const Card = ({ className, href, id, title }: CardProps) => {
  const classNames = cx('cc-card', {
    [`${className}`]: className
  });

  return (
    <div className={classNames}>
      <div className="card__image">
        <div className="promo__image-ratio">
          <img
            alt="People at a street flea market in Italy."
            className="cc-card__image"
            src="https://placehold.it/600x342"
          />
        </div>
      </div>
      <div className="card__content">
        <p className="card__type">Opinion</p>
        <h3 className="card__title">
          <a href={href} className="card__link" target="_self">
            {title}
          </a>
        </h3>
        <div className="card__meta">
          <dl className="card__authors">
            <dt className="card__authors-label">Author</dt>
            <dd className="card__author">Jeremy Farrar</dd>
          </dl>
          <time className="card__date">30 June 2020</time>
        </div>
      </div>
    </div>
  );
};

export default Card;
