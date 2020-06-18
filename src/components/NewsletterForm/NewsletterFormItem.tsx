import React from 'react';
import cx from 'classnames';

type NewsletterFormItemProps = {
  children: React.ReactNode;
  hasError?: boolean;
  type?: 'consent' | 'dropdown' | 'email' | 'error' | 'footer' | 'submit';
};

export const NewsletterFormItem = ({
  children,
  hasError,
  type
}: NewsletterFormItemProps) => {
  const classNames = cx('newsletter-form__item', {
    [`newsletter-form__item--${type}`]: type,
    'newsletter-form__item--invalid': hasError
  });

  return <div className={classNames}>{children}</div>;
};

export default NewsletterFormItem;
