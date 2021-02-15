import React, { Fragment } from 'react';

import { parseHtml } from 'utils/parse-html';

export type DescriptionProps = {
  title: string;
  markup: string;
  url: string;
  name: string;
};

type DescriptionListProps = {
  items: DescriptionProps[];
  id: string;
};

export const DescriptionList = ({ items }: DescriptionListProps) => (
  <div className="cc-description-list">
    <dl>
      {items
        .filter(({ markup }) => markup !== null)
        .map(({ title, markup }) => (
          <Fragment key={title}>
            <dt className="cc-description-list__title">{title}</dt>
            <dd className="cc-description-list__definition">
              {parseHtml(markup)}
            </dd>
          </Fragment>
        ))}
    </dl>
  </div>
);

export default DescriptionList;
