import React from 'react';
import cx from 'classnames';

import NewsletterFormItem from '../Item/NewsletterFormItem';

type NewsletterFormEmailProps = {
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  hasError?: boolean | null;
  value?: string;
};

export const NewsletterFormEmail = ({
  handleBlur,
  handleChange,
  hasError,
  value
}: NewsletterFormEmailProps) => {
  const classNames = cx('newsletter-form__input', {
    'newsletter-form__input--invalid': hasError
  });

  return (
    <NewsletterFormItem hasError={hasError} type="email">
      <label
        className="newsletter-form__item-label newsletter-form__item-label--email"
        htmlFor="email"
      >
        Your email address
      </label>
      <input
        className={classNames}
        id="email"
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        required
        type="email"
        value={value}
      />
      {hasError && (
        <div className="newsletter-form__item-error">
          <span className="u-visually-hidden">
            Error on the &quot;Your email address&quot; field
          </span>
          <span className="newsletter-form__item-error-text">
            Please provide a valid email address.
          </span>
        </div>
      )}
    </NewsletterFormItem>
  );
};

export default NewsletterFormEmail;
