import React from 'react';

export type IframeProps = {
  src: string;
  width: number;
  height: number;
  title: string;
};

export const Iframe = ({ src, width, height, title }: IframeProps) => (
  // Make this responsive by ignoring width/height, but using a container div with paddingTop
  // to ensure aspect ratio is respected.
  <div
    className="cc-iframe"
    style={{ paddingTop: `${((100 * height) / width).toFixed(2)}%` }}
  >
    <iframe className="cc-iframe__iframe" src={src} title={title} />
  </div>
);

export default Iframe;
