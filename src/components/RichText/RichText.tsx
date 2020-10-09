import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import cx from 'classnames';

import { ExternalLinkMarker } from 'Link';

import { parseHtml } from 'utils/parse-html';

type RichTextProps = {
  children: string;
  className?: string;
  variant?: 'text' | 'text-snippet';
};

/**
 * Find all anchor elements with target="_blank"
 *
 * Regex match groups
 * (?!.*class="non")               Negative lookahead to filter out any matches which contain this class
 * (?!.*href="https?:\/\/(www\.)?wellcome.(org|ac\.uk).*".*)
 *                                 Negative lookahead to filter out absolute links to the Wellcome site
 *     (www\.)?                    matches the optional www prefix
 *     (org|ac\.uk)                matches the possible domain endings
 * (<a[^>]*target="_blank"[^>]*>)  Opening anchor tag which has a target="_blank" attribute
 * ([^<]+)                         The anchor content (any character which is not a left angle bracket)
 * (<\/a>)                         Closing anchor tag
 */
// TODO: replace `non` with class name to be ignored
const regexAnchorExternal = /(?!.*class="non")(?!.*href="https?:\/\/(www\.)?wellcome.(org|ac\.uk).*".*)(<a[^>]*target="_blank"[^>]*>)([^<]+)(<\/a>)/g;

/**
 * Add markup to all anchor elements which open in a new window
 * to indicate an external link
 *
 * @param children
 */
const addExternalLinkMarkers = (children: string) => {
  // renderToStaticMarkup used to preserve svg attributes in JSX format for re-rendering
  const externalMarker = renderToStaticMarkup(<ExternalLinkMarker />);

  return children.replaceAll(regexAnchorExternal, (match, p1, p2, p3, p4, p5) =>
    // replace existing anchor string with embellished version containing assistive text
    // p[n] refers to each group within the match - groups are defined within parentheses
    // p1 and p2 are contained in the 2nd negative lookup
    // so we start with p3 as the first actual string
    p3
      ? `${p3.substring(
          0,
          p3.length - 1
        )} class="u-link-new-window">${p4}${externalMarker}${p5}`
      : match
  );
};

export const RichText = ({
  children,
  className,
  variant = 'text'
}: RichTextProps) => {
  const childrenWithMarkers = children && addExternalLinkMarkers(children);
  const classNames = cx(`cc-rich-${variant}`, {
    [className]: className
  });

  return childrenWithMarkers ? (
    <div className={classNames}>{parseHtml(childrenWithMarkers)}</div>
  ) : null;
};

export default RichText;
