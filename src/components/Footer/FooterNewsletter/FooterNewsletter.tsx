import React from 'react';

import NewsletterForm from 'NewsletterForm';

export const FooterNewsletter = () => (
  <div className="footer-newsletter">
    <NewsletterForm
      className="footer-newsletter__form"
      emailInputId="footer-newsletter"
    >
      <p className="footer-newsletter__intro">
        Get the latest news about Wellcome and the work we fund in a monthly
        email.
      </p>
    </NewsletterForm>
  </div>
);

export default FooterNewsletter;
