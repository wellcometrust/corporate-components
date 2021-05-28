import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import FileDownload from 'FileDownload';

type TableauChartProps = {
  className?: string;
  downloadFile?: string;
  downloadName?: string;
  downloadSize?: string;
  downloadType?: string;
  embed: string;
  title?: string;
};

const TABLEAU_SCRIPT_ID = 'script-tableau';
const TABLEAU_SCRIPT_SRC =
  'https://tableau.portal.wellcome.ac.uk/javascripts/api/viz_v1.js';

export const TableauChart = ({
  className,
  downloadFile,
  downloadName,
  downloadSize,
  downloadType,
  embed,
  title
}: TableauChartProps) => {
  const [isClient, setClient] = useState(false);

  const classNames = cx('cc-tableau', {
    [className]: className
  });

  useEffect(() => {
    setClient(true);
    const tableauScript = document.querySelector(`#${TABLEAU_SCRIPT_ID}`);

    // only create script once
    if (tableauScript) return;

    const script = document.createElement('script');

    script.src = TABLEAU_SCRIPT_SRC;
    script.id = TABLEAU_SCRIPT_ID;
    script.async = true;
    document.body.appendChild(script);

    // eslint-disable-next-line consistent-return
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={classNames}>
      {title && <h4 className="cc-tableau__title">{title}</h4>}
      {isClient && (
        <div
          className="cc-tableau__chart"
          dangerouslySetInnerHTML={{ __html: embed }}
        />
      )}
      {downloadFile && (
        <FileDownload
          className="cc-tableau__download-file"
          href={downloadFile}
          label="Download the data"
          name={downloadName}
          size={downloadSize}
          type={downloadType}
        />
      )}
    </div>
  );
};

export default TableauChart;
