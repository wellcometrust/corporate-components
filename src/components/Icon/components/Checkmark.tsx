import React from 'react';

import { IconSVGProps } from '../Icon';

const Checkmark = (props: IconSVGProps) => (
  <svg viewBox="0 0 42 33" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.855 32.205a2.487 2.487 0 0 0 1.819.756c.704 0 1.315-.252 1.819-.756L41.238 8.464c.508-.498.76-1.109.76-1.818a2.53 2.53 0 0 0-.751-1.828l-3.106-3.1c-.509-.499-1.11-.76-1.824-.76-.713 0-1.315.256-1.823.765L15.65 20.559l-8.152-8.146a2.486 2.486 0 0 0-1.819-.759 2.49 2.49 0 0 0-1.819.759L.753 15.514a2.492 2.492 0 0 0-.76 1.828c0 .708.257 1.305.76 1.823l13.078 13.064"
    />
  </svg>
);

export default Checkmark;
