import React from 'react';
import cx from 'classnames';

import Icon from 'Icon';
import ImageElement from 'Image/ImageElement';
import RichText from 'RichText';

type ContactImageSourceProps = {
  image_full_hi?: string;
  image_full_mobile?: string;
  image_full_mobile_hi?: string;
};

type ContactProps = {
  className?: string;
  contactFormLink?: {
    text?: string;
    url: string;
  };
  email?: string;
  imageSources?: ContactImageSourceProps;
  institution?: string;
  institutionCountry?: string;
  contactRole?: string;
  name?: string;
  teamTitle?: string;
  teamUrl?: string;
  tel?: string;
};

export const Contact = ({
  className,
  contactFormLink,
  email,
  imageSources,
  institution,
  institutionCountry,
  contactRole,
  name,
  teamTitle,
  teamUrl,
  tel
}: ContactProps) => {
  const classNames = cx('cc-contact', {
    [`${className}`]: className
  });

  return (
    <div className={classNames} itemScope itemType="http://schema.org/Person">
      {/* TODO - finalise responsive images */}
      {imageSources?.image_full_mobile && (
        <figure className="cc-contact__image">
          <ImageElement
            // sizes={sizes}
            src={imageSources?.image_full_mobile}
            // srcSet={srcSet}
          />
        </figure>
      )}
      {name && (
        <h3 className="cc-contact__name" itemProp="name">
          {name}
        </h3>
      )}
      {contactRole && (
        <RichText className="cc-contact__role" variant="text-snippet">
          {contactRole}
        </RichText>
      )}
      {institution && (
        <p className="cc-contact__institution" itemProp="worksFor">
          {institutionCountry && institutionCountry !== 'GB'
            ? `${institution}, ${institutionCountry}`
            : institution}
        </p>
      )}
      {teamUrl && (
        <p className="cc-contact__item">
          <Icon name="shareLink" className="cc-contact__link-icon" />
          <a href={teamUrl} className="cc-contact__link">
            {teamTitle || teamUrl}
          </a>
        </p>
      )}
      {email && (
        <p className="cc-contact__item">
          <Icon name="email" className="cc-contact__link-icon" />
          <a href={`mailto:${email}`} className="cc-contact__link">
            {email}
          </a>
        </p>
      )}
      {contactFormLink && (
        <p className="cc-contact__item">
          <Icon name="email" className="cc-contact__link-icon" />
          <a href={`${contactFormLink.url}`} className="cc-contact__link">
            {contactFormLink.text || 'Send a message'}
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
