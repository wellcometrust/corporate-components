import React from 'react';

export const NewsletterFormConsent = () => (
  <div className="newsletter-form__item newsletter-form__item--consent">
    <input
      className="newsletter-form__checkbox"
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
  </div>
);

export default NewsletterFormConsent;
