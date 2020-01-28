import React from 'react';

import NewsletterForm from 'NewsletterForm';

export const FooterNewsletter = () => (
  <div className="footer-newsletter">
    {/* TODO: #6021 - move footer newsletter text */}
    <p className="footer-newsletter__intro">
      Get the latest news about Wellcome and the work we fund in a monthly
      email.
    </p>
    <NewsletterForm className="footer-newsletter__form" />
  </div>
);

export default FooterNewsletter;
