import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './Footer';

const footerLinks = [
  {
    text: 'WT Grant Tracker',
    href: 'https://wtgrants.wellcome.ac.uk/Login.aspx?ReturnUrl=%2f',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    text: 'Jobs',
    href: '/jobs'
  },
  {
    text: 'Modern slavery statement',
    href: '/about-us/governance/modern-slavery-statement'
  },
  {
    text: 'Privacy and terms',
    href: '/about-us/governance/privacy-and-terms'
  },
  {
    text: 'Accessibility',
    href: '/about-us/governance/website-accessibility'
  },
  {
    text: 'Contact Us',
    href: '/contact-us'
  },
  {
    text: 'Back to top',
    href: '#href',
    role: 'presentation',
    tabIndex: -1
  }
];

const socialLinks = [
  {
    text: 'Twitter',
    className: 'footer-social__icon--twitter',
    href: 'https://twitter.com/wellcometrust'
  },
  {
    text: 'Facebook',
    className: 'footer-social__icon--facebook',
    href: 'https://www.facebook.com/WellcomeTrust/'
  },
  {
    text: 'YouTube',
    className: 'footer-social__icon--youtube',
    href: 'https://www.youtube.com/user/wellcometrust'
  },
  {
    text: 'Facebook',
    className: 'footer-social__icon--linkedin',
    href: 'https://www.linkedin.com/company/wellcome-trust'
  }
];

const FooterExample = () => (
  <Footer links={footerLinks} socialLinks={socialLinks} />
);

const stories = storiesOf('Components|Footer', module);

stories.add('Footer', FooterExample);
