import React from 'react';

const SvgShareLink = props => (
  <svg viewBox="0 0 44 44" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <path
        d="M21.999641,8.5 C14.5563466,8.5 8.5,14.5565315 8.5,22.0001795 C8.5,29.4435221 14.5564002,35.5 21.999641,35.5 C29.4434926,35.5 35.5,29.4436293 35.5,22.0001795 C35.5,14.5564243 29.4435462,8.5 21.999641,8.5 Z"
        id="Circle"
        stroke="currentColor"
      />
      <g transform="translate(13.741989, 13.107423)" stroke="currentColor">
        <rect
          id="Rectangle"
          transform="translate(6.500000, 11.106484) rotate(-26.000000) translate(-6.500000, -11.106484) "
          x={1.5}
          y={8.60648404}
          width={10}
          height={5}
          rx={2.5}
        />
        <rect
          id="Rectangle-Copy"
          transform="translate(10.516492, 6.000000) rotate(-26.000000) translate(-10.516492, -6.000000) "
          x={5.51649169}
          y={3.5}
          width={10}
          height={5}
          rx={2.5}
        />
      </g>
    </g>
  </svg>
);

export default SvgShareLink;
