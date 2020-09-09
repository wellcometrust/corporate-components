import React from 'react';

import { IconSVGProps } from '../Icon';

const SvgCrossSmall = (props: IconSVGProps) => (
  <svg viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        d="M15.063 8l.937.938-3.031 3.031L16 15l-.938.938-3.031-3.032-.031.031-.031-.031-3.031 3.031L8 15l3.032-3.031L8 8.938 8.938 8l3.031 3.031L12 11l.031.031L15.062 8z"
        id="a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#333" xlinkHref="#a" />
      <g mask="url(#b)" fill="currentColor">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgCrossSmall;
