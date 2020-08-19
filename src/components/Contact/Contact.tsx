import React from 'react';
import cx from 'classnames';

import Icon from 'Icon';

type ContactProps = {
  className?: string;
  email?: string;
  name: string;
  tel?: string;
  title?: string;
};

export const Contact = ({
  className,
  name,
  email,
  tel,
  title
}: ContactProps) => {
  const classNames = cx('cc-contact', {
    [`${className}`]: className
  });

  return (
    <div className={classNames}>
      <h3 className="cc-contact__name">{name}</h3>
      <strong
        className="cc-contact__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {email && (
        <p className="cc-contact__item">
          <Icon name="email" className="cc-contact__link-icon" />
          <a href={`mailto:${email}`} className="cc-contact__link">
            {email}
          </a>
        </p>
      )}
      {tel && (
        <p className="cc-contact__item">
          <Icon name="phone" className="cc-contact__link-icon" />
          <a href={`tel://${tel}`} className="cc-contact__link">
            {tel}
          </a>
        </p>
      )}
    </div>
  );
};

export default Contact;
