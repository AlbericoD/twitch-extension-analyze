import React, { ReactElement } from 'react';

export const newTabLink = (): ReactElement<SVGAElement> => (
  <svg
    className='bits-icon__svg'
    width='1.5em'
    height='1.5em'
    version='1.1'
    viewBox='0 0 20 20'
    x='0px'
    y='0px'>
    <path
      d='M15 9.997a1 1 0 0 1 1 1v5.994a1 1 0 0 1-1.003 1.005H3.003A1 1 0 0 1 2 16.99V4.997a.999.999 0 0 1 1.003-1.001h5.994a1 1 0 1 1 0 2H4v10h10v-5a1 1 0 0 1 1-1zm2.704-7.704c.187.187.293.442.293.707v5.001a.999.999 0 0 1-1.707.707l-1.293-1.293-2.293 2.293a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 0-1.415L12.583 5 11.29 3.708A1.002 1.002 0 0 1 11.997 2h5a1 1 0 0 1 .707.293z'
      fillRule='evenodd'
    />
  </svg>
);
