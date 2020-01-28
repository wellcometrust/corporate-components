import React, { useState } from 'react';
import cx from 'classnames';

import isEmail from 'utils/is-email';

import fetchNewsletterResponse from './fetch-newsletter-response';

import NewsletterFormEmail from './Email';
import NewsletterFormConsent from './Consent';
import NewsletterFormFooter from './Footer';
import NewsletterFormSubmit from './Submit';

type NewsletterFormProps = {
  className?: string;
};

export const NewsletterForm = ({ className }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [consentError, setConsentError] = useState(null);

  // handle some pre-submit tidy-ups
  const handlePreSubmitUpdates = () => {
    setEmailError(!isEmail(email));
    setConsentError(!consent);
  };

  // Handle submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handlePreSubmitUpdates();

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        email
      })
    };

    // TODO: use fetchNewsletterResponse (currently throws no-useless-catch error)
    try {
      const response = await fetch(
        'https://wellcome.ac.uk/newsletter-signup',
        requestOptions
      );
      const data = await response.json();

      return data;

      // TODO: handle success response
    } catch (error) {
      throw new Error(error);

      // TODO: handle error response
    }
  };

  // Handle consent chekckbox change
  const handleConsentChange = (checked: boolean) => {
    setConsent(checked);
    setConsentError(!checked);
  };

  // Handle email input change
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  // Handle email input blur
  const handleEmailBlur = (value: string) => {
    setEmailError(!isEmail(value));
  };

  const classNames = cx('newsletter-form', {
    [`${className}`]: className
  });

  return (
    <form
      action="https://r1.dmtrk.net/signup.ashx"
      className={classNames}
      method="POST"
      onSubmit={handleSubmit}
    >
      <NewsletterFormEmail
        handleBlur={event => handleEmailBlur(event.currentTarget.value)}
        handleChange={event => handleEmailChange(event.currentTarget.value)}
        hasError={emailError}
        value={email}
      />
      <NewsletterFormConsent
        checked={consent}
        handleChange={event => handleConsentChange(event.currentTarget.checked)}
        hasError={consentError}
      />
      <NewsletterFormSubmit
        disabled={consentError || emailError}
        handleClick={handlePreSubmitUpdates}
      />
      <NewsletterFormFooter />
    </form>
  );
};

export default NewsletterForm;
