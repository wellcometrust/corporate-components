import React from 'react';

import NewsletterFormEmail from './NewsletterFormEmail';
import NewsletterFormConsent from './NewsletterFormConsent';
import NewsletterFormFooter from './NewsletterFormFooter';
import NewsletterFormSubmit from './NewsletterFormSubmit';

type NewsletterFormProps = {
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => {};
};

export const NewsletterForm = ({ handleSubmit }: NewsletterFormProps) => (
  <form
    action="https://r1.dmtrk.net/signup.ashx"
    className="newsletter-form"
    method="POST"
    onSubmit={handleSubmit}
  >
    {/* The hidden inputs below are required by dotmailer */}
    <input type="hidden" name="userid" value="279650" />
    <input type="hidden" name="addressbookid" value="49968" />
    <input
      type="hidden"
      name="SIG403976cd6c63800564a89357fa76a5569262074a6d9631a18038ac57300124ef"
    />
    <input type="hidden" name="ReturnURL" value="/" />

    <NewsletterFormEmail />
    <NewsletterFormConsent />
    <NewsletterFormSubmit />
    <NewsletterFormFooter />
  </form>
);

export default NewsletterForm;
