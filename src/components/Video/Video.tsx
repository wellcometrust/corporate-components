import React, { useState } from 'react';

import Media from 'Media';

type VideoProps = {
  caption?: string;
  credit?: string;
  className?: string;
  src: string;
};

export const Video = ({ caption, credit, className, src }: VideoProps) => (
  <Media caption={caption} className={className} credit={credit} type="video">
    <div className="widescreen-container">
      <iframe
        allowFullScreen
        className="widescreen-media"
        src={`${src}?wmode=opaque&modestbranding=1&rel=0&showinfo=0&color=white&autohide=1`}
        title={caption}
      />
    </div>
  </Media>
);

export default Video;
