import React from 'react';

import NewsletterFormItem from './NewsletterFormItem';

type NewsletterFormResearchDropDownProps = {
  handleChange?: (event: React.FormEvent<HTMLSelectElement>) => void;
  value: string;
};

export const NewsletterFormResearchDropDown = ({
  handleChange,
  value
}: NewsletterFormResearchDropDownProps) => {
  return (
    <NewsletterFormItem type="dropdown">
      <label
        className="newsletter-form__item-label newsletter-form__item-label--dropdown"
        htmlFor="edit-research-options"
      >
        Which of these best describes you?
      </label>
      <select
        id="edit-research-dd"
        name="research_dd"
        className="form-select"
        value={value}
        onChange={handleChange}
      >
        <option value="0">Please select</option>
        <option value="1">I am Wellcome-funded</option>
        <option value="2">I am interested in securing Wellcome funding</option>
        <option value="3">I work in academic / research administration</option>
        <option value="4">Other</option>
      </select>
    </NewsletterFormItem>
  );
};

export default NewsletterFormResearchDropDown;
