import React, { useState } from 'react';
import cx from 'classnames';

import isEmail from 'utils/is-email';

import fetchNewsletterResponse from './fetch-newsletter-response';

import NewsletterFormItem from './NewsletterFormItem';
import NewsletterFormEmail from './NewsletterFormEmail';
import NewsletterFormConsent from './NewsletterFormConsent';
import NewsletterFormFooter from './NewsletterFormFooter';
import NewsletterFormSubmit from './NewsletterFormSubmit';

type NewsletterFormProps = {
  className?: string;
};

export const NewsletterForm = ({ className }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [consentError, setConsentError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [responseSuccess, setResponseSuccess] = useState(null);

  /**
   * Handles the form validation; sets error state(s) if any form fields
   * are invalid.
   */
  const checkFormValidity = () => {
    setEmailError(!isEmail(email));
    setConsentError(!consent);
  };

  /**
   * Handles a form submission success
   */
  const handleSuccess = () => {
    setResponseSuccess(true);
  };

  /**
   * Run pre-form submission tidy ups; clears any errors + ensures
   * form fields are valid.
   */
  const preSubmitUpdates = () => {
    checkFormValidity();
    setBusy(true);
  };

  /**
   * Handles the form submission.
   *
   * @param {event} FormEvent
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    preSubmitUpdates();

    const response = await fetchNewsletterResponse(
      // TODO: #6023 - move to .env
      'https://wellcome.ac.uk/newsletter-signup',
      email
    );

    if (response.status === 200) {
      handleSuccess();
    } else {
      // TODO: #6022 - add UI error handling
    }
  };

  /**
   * Handles when consent <input /> (checkbox) changes; updates value of
   * state variable, sets error state.
   *
   * @param {boolean} checked - 'checked' property of HTMLInputElement
   */
  const handleConsentChange = ({ checked }: HTMLInputElement) => {
    setConsent(checked);
    setConsentError(!checked);
  };

  /**
   * Handles email <input /> changes; updates value of state variable.
   *
   * @param {Object} HTMLInputElement - value key of an HTMLInputElement
   */
  const handleEmailChange = ({ value }: HTMLInputElement) => {
    setEmail(value);
  };

  /**
   * Handles email <input /> blur; updates error state when user blurs the
   * email <input />.
   *
   * @param {Object} HTMLInputElement - value key of an HTMLInputElement
   */
  const handleEmailBlur = ({ value }: HTMLInputElement) => {
    setEmailError(!isEmail(value));
  };

  const classNames = cx('newsletter-form', {
    [`${className}`]: className
  });

  // Show the success response if the submission has been sent
  if (responseSuccess) {
    return (
      <p className="newsletter-form__response-msg newsletter-form__response-msg--success">
        Thank you. If this is the first time you have subscribed to a newsletter
        from Wellcome, you will receive an email asking you to confirm your
        subscription.
      </p>
    );
  }

  return (
    <form
      action="https://r1.dmtrk.net/signup.ashx"
      className={classNames}
      method="POST"
      onSubmit={handleSubmit}
    >
      <NewsletterFormEmail
        handleBlur={event => handleEmailBlur(event.currentTarget)}
        handleChange={event => handleEmailChange(event.currentTarget)}
        hasError={emailError}
        value={email}
      />
      <NewsletterFormConsent
        checked={consent}
        handleChange={event => handleConsentChange(event.currentTarget)}
        hasError={consentError}
      />
      <NewsletterFormSubmit
        disabled={consentError || emailError || busy}
        busy={busy}
        handleClick={checkFormValidity}
      />
      <NewsletterFormFooter />
    </form>
  );
};

export default NewsletterForm;
