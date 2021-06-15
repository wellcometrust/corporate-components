import React from 'react';

import NewsletterForm from 'NewsletterForm';

export const FooterNewsletter = () => (
  <div className="cc-footer-newsletter">
    <h3 className="cc-footer-newsletter__title">
      Sign up to our monthly newsletter
    </h3>
    <div className="cc-footer-newsletter__grid">
      <p className="cc-footer-newsletter__intro">
        Stay up to date with some of the biggest stories in global health, and
        how we&apos;re advocating to improve health for everyone.
      </p>
      <NewsletterForm className="cc-footer-newsletter__form" />
    </div>
  </div>
);

export default FooterNewsletter;
