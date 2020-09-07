import React from 'react';
import cx from 'classnames';

type FileDownloadProps = {
  className?: string;
  href: string;
  label?: string;
  name?: string;
  size?: string;
  type?: string;
};

export const FileDownload = ({
  className,
  href,
  label = 'Download',
  name,
  size,
  type
}: FileDownloadProps) => {
  const classNames = cx('cc-file-download', {
    [`${className}`]: className
  });

  return (
    <div className={classNames}>
      <a
        className="cc-file-download__link"
        download
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {label}
        <span className="u-visually-hidden">{` ${name}`}</span>
      </a>
      <span className="cc-file-download__meta">
        &nbsp;
        {type}
        &nbsp;
        {size}
      </span>
    </div>
  );
};

export default FileDownload;
