import React from 'react';
import { renderToString } from 'react-dom/server';

// polyfill and type definitions for String.prototype.replaceAll()
import 'ts-replace-all';
import ReactHtmlParser from 'react-html-parser';

import { ExternalLinkMarker } from 'Link';

type RichTextProps = {
  children: string;
};

const setExternalLinkMarkers = (children: React.ReactNode) => {
  const externalMarker = renderToString(<ExternalLinkMarker />);
  const str = children.toString();

  /**
   * Find all anchor elements with target="_blank"
   *
   * Regex match groups
   * (?!.*class="non")               Negative lookahead to filter out any matches which contain this class
   * (<a[^>]*target="_blank"[^>]*>   Opening anchor tag which has a target="_blank" attribute
   * ([^<]+)                         The anchor content (any character which is not a left angle bracket)
   * (<\/a>)                         Closing anchor tag
   */

  const regex = /(?!.*class="non")(<a[^>]*target="_blank"[^>]*>)([^<]+)(<\/a>)/g;

  return str.replaceAll(
    regex,
    (match, p1, p2, p3) =>
      // replace existing anchor string with embellished version containing assistive text
      `${p1.substring(
        0,
        p1.length - 1
      )} class="u-link-new-window">${p2}${externalMarker}${p3}`
  );
};

export const RichText = ({ children }: RichTextProps) => {
  const childrenWithMarkers = setExternalLinkMarkers(children);

  return <>{ReactHtmlParser(childrenWithMarkers)}</>;
};

export default RichText;
