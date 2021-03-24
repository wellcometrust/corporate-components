import React from 'react';

import Button from 'Button';

import NewsletterFormItem from './NewsletterFormItem';

type NewsletterFormSubmitProps = {
  busy: boolean;
  disabled?: boolean | null;
  handleClick: () => void;
};

export const NewsletterFormSubmit = ({
  busy,
  disabled,
  handleClick
}: NewsletterFormSubmitProps) => (
  <NewsletterFormItem type="submit">
    <Button
      className="newsletter-form__btn-submit"
      isDisabled={disabled}
      onClick={handleClick}
      type="submit"
    >
      {busy ? 'Submitting' : 'Subscribe'}
    </Button>
  </NewsletterFormItem>
);

export default NewsletterFormSubmit;
