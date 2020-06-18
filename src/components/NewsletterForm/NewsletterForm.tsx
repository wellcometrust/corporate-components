import React, { useState } from 'react';
import cx from 'classnames';

import isEmail from 'utils/is-email';

import fetchNewsletterResponse from './fetch-newsletter-response';

import NewsletterFormEmail from './NewsletterFormEmail';
import NewsletterFormResearchDropDown from './NewsletterFormResearchDropDown';
import NewsletterFormConsent from './NewsletterFormConsent';
import NewsletterFormFooter from './NewsletterFormFooter';
import NewsletterFormSubmit from './NewsletterFormSubmit';
import NewsletterFormError from './NewsletterFormError';

type NewsletterFormProps = {
  children?: React.ReactNode;
  className?: string;
  type?: string;
  researchOption?: string;
};

export const NewsletterForm = ({
  children,
  className,
  researchOption,
  type
}: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [dropdown, setDropdown] = useState('');
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [consentError, setConsentError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [responseSuccess, setResponseSuccess] = useState(null);
  const [responseError, setResponseError] = useState(null);

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
   * Handles a form submission error
   */
  const handleError = () => {
    setResponseError(true);
    setBusy(false);
  };

  /**
   * Run pre-form submission tidy ups; clears any errors + ensures
   * form fields are valid.
   */
  const preSubmitUpdates = () => {
    checkFormValidity();
    setBusy(true);
    setResponseError(false);
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
      email,
      type,
      dropdown
    );

    if (response?.status === 200) {
      handleSuccess();
    } else {
      handleError();
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
    setResponseError(false);
  };

  /**
   * Handles email <input /> changes; updates value of state variable.
   *
   * @param {Object} HTMLInputElement - value key of an HTMLInputElement
   */
  const handleEmailChange = ({ value }: HTMLInputElement) => {
    setEmail(value);
    setResponseError(false);
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

  /**
   * Handles researchdropdwon <select /> changes; updates value of state variable.
   *
   * @param {Object} HTMLSelectElement - value key of an HTMLSelectElement
   */
  const handleDropDownChange = ({ value }: HTMLSelectElement) => {
    setDropdown(value);
  };

  const classNames = cx('newsletter-form', {
    [`${className}`]: className
  });

  return (
    // Show the success response if the submission has been sent
    responseSuccess ? (
      <div className="newsletter-form__response-msg newsletter-form__response-msg--success">
        <p className="newsletter-form__response-msg-text">
          Thank you. If this is the first time you have subscribed to a
          newsletter from Wellcome, you will receive an email asking you to
          confirm your subscription.
        </p>
      </div>
    ) : (
      <>
        {children}
        <form
          action="https://r1.dmtrk.net/signup.ashx"
          className={classNames}
          method="POST"
          onSubmit={handleSubmit}
        >
          {type === 'research' && (
            <NewsletterFormResearchDropDown
              handleChange={event => handleDropDownChange(event.currentTarget)}
              value={researchOption}
            />
          )}
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
          {responseError && <NewsletterFormError />}
          <NewsletterFormFooter />
        </form>
      </>
    )
  );
};

export default NewsletterForm;
