import React from 'react';

import NewsletterFormItem from './NewsletterFormItem';

export const NewsletterFormFooter = () => (
  <>
    <p className="newsletter-form__item newsletter-form__item--footer">
      By clicking subscribe, you agree to recieve this newsletter.
    </p>
    <p className="newsletter-form__item newsletter-form__item--footer">
      We use a third party provider, Dotmailer, to deliver our newsletters. For
      information about how we handle your data, please read our privacy notice.
      You can unsubscribe at any time using the links in the email you recieve.
    </p>
  </>
);

export default NewsletterFormFooter;
