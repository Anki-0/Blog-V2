import React from 'react';

const SvgSearch = (): JSX.Element => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fad'
      data-icon='search'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      className='svg-inline--fa fk-search fk-w-16 fk-9x'
      width='24px'
    >
      <g className='fk-group'>
        <path
          fill='#6c7983'
          d='M208 80a128 128 0 1 1-90.51 37.49A127.15 127.15 0 0 1 208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z'
          className='fk-secondary'
        ></path>
        <path
          fill='#454e56'
          d='M504.9 476.7L476.6 505a23.9 23.9 0 0 1-33.9 0L343 405.3a24 24 0 0 1-7-17V372l36-36h16.3a24 24 0 0 1 17 7l99.7 99.7a24.11 24.11 0 0 1-.1 34z'
          className='fk-primary'
        ></path>
      </g>
    </svg>
  );
};

export default SvgSearch;
