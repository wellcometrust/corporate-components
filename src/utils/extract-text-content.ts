/**
 * Strips all markup content from an HTML string
 *
 * @param {string} str  String which includes HTML markup
 * @return              String content only
 */
const extractTextContent = (str: string) => {
  const span = document.createElement('span');
  span.innerHTML = str;

  return span.textContent || span.innerText;
};

export default extractTextContent;
