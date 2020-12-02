import React from 'react';
import cx from 'classnames';

type FileDownloadProps = {
  className?: string;
  gaFileType?: string;
  gaReportType?: string;
  href: string;
  label?: string;
  name?: string;
  size?: string;
  type: string;
};

export const FileDownload = ({
  className,
  gaFileType,
  gaReportType,
  href,
  label = 'Download',
  name,
  size,
  type
}: FileDownloadProps) => {
  const classNames = cx('cc-file-download', {
    [className]: className
  });

  return (
    <div className={classNames}>
      <a
        className="cc-file-download__link"
        // todo: #7814
        data-file-type={gaFileType}
        data-report-type={gaReportType}
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
