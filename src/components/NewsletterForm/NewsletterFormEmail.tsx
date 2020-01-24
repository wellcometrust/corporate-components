import React from 'react';

export const NewsletterFormEmail = () => (
  <div className="newsletter-form__item newsletter-form__item--email">
    <label
      className="newsletter-form__item-label newsletter-form__item-label--email"
      htmlFor="email"
    >
      Your email address
    </label>
    <input
      className="newsletter-form__input"
      id="email"
      name="email"
      type="email"
      required
    />
  </div>
);

export default NewsletterFormEmail;
