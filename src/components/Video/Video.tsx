import React from 'react';

import Link from 'Link';
import Media from 'Media';

type VideoProps = {
  caption?: string;
  credit?: string;
  className?: string;
  id: string;
  licence?: string;
  src: string;
};

/**
 * Converts YouTube page URL to embed format
 *
 * @param {string} src YouTube video URL
 * @returns {string} YouTube embed URL
 */
export const getYoutubeEmbedUrl = (src: string) => {
  const regex = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/;
  const match = src.match(regex);
  const embedOptions =
    '?wmode=opaque&modestbranding=1&rel=0&showinfo=0&color=white&autohide=1';

  return match !== null
    ? `//www.youtube-nocookie.com/embed/${match[2]}${embedOptions}`
    : null;
};

export const Video = ({
  caption,
  credit,
  className,
  id,
  licence,
  src
}: VideoProps) => {
  const embedSrc = getYoutubeEmbedUrl(src);

  return (
    <Media
      caption={caption}
      className={className}
      credit={credit}
      licence={licence}
    >
      <div className="cc-video" id={id}>
        <div className="cc-video__inner">
          <iframe
            allowFullScreen
            className="cc-video__iframe"
            src={embedSrc}
            title={caption}
            aria-describedby={`${id}-consent`}
          />
        </div>
        <p className="cc-video__caption" id={`${id}-consent`}>
          Pressing play on the video above will set a third-party cookie. Please
          read our{' '}
          <Link to="/about-us/governance/privacy-and-terms#cookies">
            cookie policy
          </Link>{' '}
          for more information.
        </p>
      </div>
    </Media>
  );
};

export default Video;
