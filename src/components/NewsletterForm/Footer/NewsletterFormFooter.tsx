import React from 'react';

import NewsletterFormItem from '../Item/NewsletterFormItem';

export const NewsletterFormFooter = () => (
  <NewsletterFormItem type="footer">
    <p>
      We use a third party provider, Dotdigital, to deliver our newsletters. For
      information about how we handle your data, please read our privacy notice.
      You can unsubscribe at any time using links in the emails you receive.
    </p>
  </NewsletterFormItem>
);

export default NewsletterFormFooter;
