import React from 'react';

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

export const DescriptionList = ({ items, id }: DescriptionListProps) => (
  <div className="cc-description-list">
    <dl key={id}>
      {items
        .filter(({ markup }) => markup !== null )
        .map(({ title, markup }) => (
          <>
            <dt className="cc-description-list__title">{title}</dt>
            <dd className="cc-description-list__definition">
              {parseHtml(markup)}
            </dd>
          </>
        ))}
    </dl>
  </div>
);

export default DescriptionList;
