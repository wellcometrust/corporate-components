import React from 'react';
import cx from 'classnames';

import VisuallyHidden from 'VisuallyHidden';
import NewsletterFormItem from './NewsletterFormItem';

type NewsletterFormConsentProps = {
  checked?: boolean | null;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  hasError?: boolean | null;
};

export const NewsletterFormConsent = ({
  checked,
  handleChange,
  hasError
}: NewsletterFormConsentProps) => {
  const classNames = cx('newsletter-form__checkbox', {
    'newsletter-form__checkbox--invalid': hasError
  });

  return (
    <NewsletterFormItem hasError={hasError} type="consent">
      <input
        checked={checked}
        className={classNames}
        onChange={handleChange}
        id="consent"
        name="consent"
        type="checkbox"
        required
      />
      <label
        className="newsletter-form__item-label newsletter-form__item-label--consent"
        htmlFor="consent"
      >
        I agree to receive this newsletter
      </label>
      {hasError && (
        <div className="newsletter-form__item-error">
          <VisuallyHidden>
            <>
              Error on the &quot;I agree to receive this newsletter.&quot;
              field.
            </>
          </VisuallyHidden>
          <span className="newsletter-form__item-error-text">
            Please check this box to agree to our terms and conditions.
          </span>
        </div>
      )}
    </NewsletterFormItem>
  );
};

export default NewsletterFormConsent;
