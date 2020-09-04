import React, { useEffect, useState } from 'react';
import cx from 'classnames';

type TableauChartProps = {
  className?: string;
  downloadLink?: string;
  embed: string;
};

const TABLEAU_SCRIPT_ID = 'script-tableau';
const TABLEAU_SCRIPT_SRC = 'https://tableau.portal.wellcome.ac.uk/javascripts/api/viz_v1.js';

export const TableauChart = ({
  className,
  downloadLink,
  embed
}: TableauChartProps) => {
  const [isClient, setClient] = useState(false);

  const classNames = cx('cc-tableau', {
    [`${className}`]: className
  });
  const placeholder = <p>Tableau Chart will render here</p>;

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

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className={classNames}>
      {isClient ?
        <div className="cc-tableau__enhanced" dangerouslySetInnerHTML={{ __html: embed }} />
        : placeholder
      }
      {downloadLink &&
        <a
          download
          href={downloadLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          Download the data</a>}
    </div>
  );
};

export default TableauChart;
