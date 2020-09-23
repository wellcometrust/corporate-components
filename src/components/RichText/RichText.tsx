import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import cx from 'classnames';

// polyfill and type definitions for String.prototype.replaceAll()
import 'ts-replace-all';
import ReactHtmlParser from 'react-html-parser';

import { ExternalLinkMarker } from 'Link';

type RichTextProps = {
  children: string;
  className?: string;
  variant?: 'text' | 'text-snippet';
};

const regexAnchorExternal = /(?!.*class="non")(<a[^>]*target="_blank"[^>]*>)([^<]+)(<\/a>)/gs;
const regexTable = /<table[^>]*>.*?<\/table>/gs;

const addTableWrappers = (children: string) => {
  // const str = children.toString();

  return children.replaceAll(
    regexTable,
    match => `<div class="u-table-wrapper">${match}</div>`
  );
};

/**
 * Find all anchor elements with target="_blank"
 *
 * Regex match groups
 * (?!.*class="non")               Negative lookahead to filter out any matches which contain this class
 * (<a[^>]*target="_blank"[^>]*>)  Opening anchor tag which has a target="_blank" attribute
 * ([^<]+)                         The anchor content (any character which is not a left angle bracket)
 * (<\/a>)                         Closing anchor tag
 */
// TODO: replace `non` with class name to be ignored
const addExternalLinkMarkers = (children: string) => {
  // renderToStaticMarkup used to preserve svg attributes in JSX format for re-rendering
  const externalMarker = renderToStaticMarkup(<ExternalLinkMarker />);
  // const str = children.toString();

  return children.replaceAll(
    regexAnchorExternal,
    (match, p1, p2, p3) =>
      // replace existing anchor string with embellished version containing assistive text
      `${p1.substring(
        0,
        p1.length - 1
      )} class="u-link-new-window">${p2}${externalMarker}${p3}`
  );
};

export const RichText = ({
  children,
  className,
  variant = 'text'
}: RichTextProps) => {
  const childrenWithMarkers = children && addExternalLinkMarkers(children);
  const childrenWithTableWrappers =
    childrenWithMarkers && addTableWrappers(childrenWithMarkers);
  const classNames = cx(`cc-rich-${variant}`, {
    [className]: className
  });

  return childrenWithTableWrappers ? (
    <div className={classNames}>
      {ReactHtmlParser(childrenWithTableWrappers)}
    </div>
  ) : null;
};

export default RichText;
