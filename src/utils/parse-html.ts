/**
 * @file HTML Parser utility.
 */
import 'ts-replace-all';
import ReactHtmlParser, { Options } from 'react-html-parser';

/**
 * Parse some HTML using the ReactHtmlParser lib.
 *
 * Decodes HTML entities, strips out <script> tags to prevent XSS
 * attacks.
 *
 * @see {@link https://github.com/wrakky/react-html-parser}
 *
 * @param {string} html
 * @param {object} options
 *
 * @returns {ReactElement}
 */
export const parseHtml = (html: string, options?: Options) =>
  ReactHtmlParser(html, options);

export default parseHtml;
