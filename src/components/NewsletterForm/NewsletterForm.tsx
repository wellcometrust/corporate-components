import React, { useState } from 'react';
import cx from 'classnames';

import isEmail from 'utils/is-email';

import NewsletterFormEmail from './NewsletterFormEmail';
import NewsletterFormConsent from './NewsletterFormConsent';
import NewsletterFormFooter from './NewsletterFormFooter';
import NewsletterFormSubmit from './NewsletterFormSubmit';

type NewsletterFormProps = {
  children?: React.ReactNode;
  className?: string;
};

export const NewsletterForm = ({
  children,
  className
}: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [consentError, setConsentError] = useState(null);

  /**
   * Handles the form validation; sets error state(s) if any form fields
   * are invalid.
   */
  const checkFormValidity = () => {
    setEmailError(!isEmail(email));
    setConsentError(!consent);
  };

  /**
   * Handles the form submission.
   *
   * @param {event} FormEvent
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    checkFormValidity();

    // TODO: #6014 handle form submission
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

  return (
    <>
      {children}
      <form
        action="https://r1.dmtrk.net/signup.ashx"
        className={classNames}
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
          disabled={consentError || emailError}
          handleClick={checkFormValidity}
        />
        <NewsletterFormFooter />
      </form>
    </>
  );
};

export default NewsletterForm;
