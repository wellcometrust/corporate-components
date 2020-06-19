import React from 'react';

import Media from 'Media';

type VideoProps = {
  caption?: string;
  credit?: string;
  className?: string;
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
    ? `//www.youtube.com/embed/${match[2]}${embedOptions}`
    : null;
};

export const Video = ({ caption, credit, className, src }: VideoProps) => {
  const embedSrc = getYoutubeEmbedUrl(src);

  return (
    <Media caption={caption} className={className} credit={credit} type="video">
      <div className="widescreen-container">
        <iframe
          allowFullScreen
          className="widescreen-media"
          src={embedSrc}
          title={caption}
        />
      </div>
    </Media>
  );
};

export default Video;