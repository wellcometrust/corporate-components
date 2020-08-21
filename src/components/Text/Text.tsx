import React from 'react';
import { renderToString } from 'react-dom/server';

import cx from 'classnames';
import ReactHtmlParser from 'react-html-parser';

import { ExternalLinkMarker } from 'Link';

type TextProps = {
  children: string;
  className?: string;
  title?: string;
  variant?: 'text' | 'text-snippet';
};

const setExternalLinkMarkers = (children: React.ReactNode) => {
  const externalMarker = renderToString(<ExternalLinkMarker />);
  // const str = children.toString();
  const str =
    '<li> developing new vaccines, <a href="https://who.org">external link no target blank</a>treatments and diagnostics quickly and at scale, so they can be available to people that need them </li>';
  const regex = /(?!.*class="non")(<a.*target="_blank".*>)(.+<\/a>)/g;

  // TODO: headscratch string replaceAll not working currently
  // const newStr = str.replaceAll(regex, 'asd');
  // TODO return ...

  // `str.matchAll` will successfully match all external links
  // and we can then add the required markup to them
  // but we want to replace them in situ,
  // hence wanting to use `str.replaceAll`
  // const matchArray = [...str.matchAll(regex)];
  // return matchArray.map(m => `${m[1].substring(0, m[1].length - 1)} class="">${externalMarker}${m[2]}`);
};

export const Text = ({
  children,
  className,
  title,
  variant = 'text'
}: TextProps) => {
  const classNames = cx(`cc-${variant}`, {
    [`${className}`]: className
  });

  const c = setExternalLinkMarkers(children);

  console.log(c);

  return (
    <div className={classNames}>
      {title && <h3 className={`cc-${variant}__title`}>{title}</h3>}
      {ReactHtmlParser(children)}
    </div>
  );
};

export default Text;
