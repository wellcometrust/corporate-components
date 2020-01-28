import React from 'react';

import Button from 'Button';

import NewsletterFormItem from 'NewsletterForm/Item';

type NewsletterFormSubmitProps = {
  disabled?: boolean | null;
  handleClick: () => void;
};

export const NewsletterFormSubmit = ({
  disabled,
  handleClick
}: NewsletterFormSubmitProps) => (
  <NewsletterFormItem type="submit">
    <Button
      className="newsletter-form__btn-submit"
      disabled={disabled}
      onClick={handleClick}
      type="submit"
    >
      Subscribe
    </Button>
  </NewsletterFormItem>
);

export default NewsletterFormSubmit;
