import React from 'react';

type Props = {
  role?: string;
  title?: string;
};

const SvgCircleCross = (props: Props) => (
  <svg viewBox="0 0 18 18" {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="currentColor" d="M9 0a9 9 0 0 1 9 9 9 9 0 1 1-9-9z" />
      <path
        fill="#FFF"
        d="M13.243 3.343L9 7.586 4.757 3.343 3.343 4.757 7.586 9l-4.243 4.243 1.414 1.414L9 10.414l4.243 4.243 1.414-1.414L10.414 9l4.243-4.243z"
      />
    </g>
  </svg>
);

export default SvgCircleCross;
