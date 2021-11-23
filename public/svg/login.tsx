import React from 'react';

type props = { className: string };

export default function SvgLogin({ className }: props): JSX.Element {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fad'
      data-icon='user-visor'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 448 512'
      className={`svg-inline--fa fk-user-visor fk-w-14 fk-9x ${className}`}
      width='24px'
    >
      <g className='fk-group'>
        <path
          fill='#6c7983'
          d='M342.94531,174.59766C340.64063,175.125,338.46094,176,336,176H112c-2.46094,0-4.64062-.875-6.94531-1.40234C123.71875,222.18359,169.79688,256,224,256S324.28125,222.18359,342.94531,174.59766ZM224,0c-40.25,0-75.71875,18.95312-99.17969,48H323.17969C299.71875,18.95312,264.25,0,224,0ZM325.92188,353.5625A3.97907,3.97907,0,0,0,322.85938,352a4.30688,4.30688,0,0,0-3.14063,1.39062c-19.82813,23-31.82813,53.10938-35.70313,89.5a4.03446,4.03446,0,0,0,2.04688,3.92188,4.11332,4.11332,0,0,0,4.39063-.34375c24.85937-19.32813,33.75-23.8125,37.04687-24.8125a5.72785,5.72785,0,0,1,1.375-.375c2.23438,1.98437,7.67188,7.84375,19.85938,25.03125A4.01561,4.01561,0,0,0,352,448a4.06431,4.06431,0,0,0,1.28125-.20312A3.992,3.992,0,0,0,356,443.875C354.84375,408.53125,344.73438,378.15625,325.92188,353.5625Z'
          className='fk-secondary'
        ></path>
        <path
          fill='#b2becd'
          d='M313.59375,288h-16.6875a174.10379,174.10379,0,0,1-145.8125,0h-16.6875A134.44134,134.44134,0,0,0,0,422.40625V464a48.01238,48.01238,0,0,0,48,48H400a48.01238,48.01238,0,0,0,48-48V422.40625A134.44134,134.44134,0,0,0,313.59375,288Zm39.6875,159.79688A4.06431,4.06431,0,0,1,352,448a4.01561,4.01561,0,0,1-3.26562-1.6875c-12.1875-17.1875-17.625-23.04688-19.85938-25.03125a5.72785,5.72785,0,0,0-1.375.375c-3.29688,1-12.1875,5.48437-37.04687,24.8125a4.11332,4.11332,0,0,1-4.39063.34375,4.03446,4.03446,0,0,1-2.04688-3.92188c3.875-36.39062,15.875-66.5,35.70313-89.5A4.30688,4.30688,0,0,1,322.85938,352a3.97907,3.97907,0,0,1,3.0625,1.5625C344.73438,378.15625,354.84375,408.53125,356,443.875A3.992,3.992,0,0,1,353.28125,447.79688ZM112,176H336a32.00158,32.00158,0,0,0,32-32V80a32.00033,32.00033,0,0,0-32-32H112A32.00034,32.00034,0,0,0,80,80v64A32.00158,32.00158,0,0,0,112,176Zm16-80H320v32H128Z'
          className='fk-primary'
        ></path>
      </g>
    </svg>
  );
}
