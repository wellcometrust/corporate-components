/**
 * @file DescriptionList component to display a definition list
 * of terms and their associated data.
 */
import React, { Fragment } from 'react';

import { parseHtml } from 'utils/parse-html';

type DescriptionListProps = {
  items: {
    markup: string;
    name: string;
    title: string;
    url: string;
  }[];
};

/**
 * DescriptionList component renders a definition list (<dl>)
 * of terms (<dt>) and their associated data (<dd>)
 *
 * @param {object[]} items
 * @param {string} items.markup HTML string
 * @param {string} items.name
 * @param {string} items.title
 * @param {string} items.url
 *
 * @returns {HTMLElement}
 */
export const DescriptionList = ({ items }: DescriptionListProps) => (
  <div className="cc-description-list">
    <dl>
      {items
        .filter(({ markup }) => markup !== '')
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
