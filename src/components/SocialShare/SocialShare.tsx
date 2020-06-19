import React, { MouseEvent as ReactMouseEvent, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import Button from 'Button';
import Icon from 'Icon';

type SocialShareProps = {
  body: string;
  hasCopyLink?: boolean;
  title: string;
  url: string;
};

export const SocialShare = ({
  body,
  hasCopyLink = false,
  title,
  url
}: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  // TODO: introduce data array or map for dynamically generating social links
  return (
    <div className="cc-social-share">
      <ul className="cc-social-share__list">
        <li className="cc-social-share__item">
          <a
            href={`https://www.facebook.com/share.php?u=${url}?utm_source=facebookShare`}
            className="cc-social-share__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="u-visually-hidden">Facebook</span>
            <Icon name="facebook" className="cc-social-share__icon" />
          </a>
        </li>
        <li className="cc-social-share__item">
          <a
            href={`https://twitter.com/intent/tweet?text=${title}%20%40wellcometrust%20&amp;url=${url}?utm_source=twitterShare`}
            className="cc-social-share__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="u-visually-hidden">Twitter</span>
            <Icon name="twitter" className="cc-social-share__icon" />
          </a>
        </li>
        <li className="cc-social-share__item">
          <a
            href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}?utm_source=linkedinShare`}
            className="cc-social-share__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="u-visually-hidden">LinkedIn</span>
            <Icon name="linkedin" className="cc-social-share__icon" />
          </a>
        </li>
        <li className="cc-social-share__item">
          <a
            href={`mailto:?subject=Shared%20from%20Wellcome%3A%20${title}&amp;body=${body}: ${url}?utm_source=emailShare %0A%0A---%0A%0ASign up to the Wellcome newsletter: https://wellcome.ac.uk/newsletters/subscribe-to-wellcome-newsletter-temp`}
            className="cc-social-share__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="u-visually-hidden">Email</span>
            <Icon name="email" className="cc-social-share__icon" />
          </a>
        </li>
        {hasCopyLink && (
          <li className="cc-social-share__item">
            <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
              <Button className="cc-social-share__link" variant="unstyled">
                <span className="u-visually-hidden">Share</span>
                <Icon name="shareLink" className="cc-social-share__icon" />
              </Button>
            </CopyToClipboard>
          </li>
        )}
      </ul>
      {copied && <span className="cc-social-share__copied">URL copied</span>}
    </div>
  );
};

export default SocialShare;
