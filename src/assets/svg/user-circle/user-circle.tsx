import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const UserCircleSVG: FC<SVGType> = ({ color = 'var(--text-redesigned)', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    width={size}
    height={size}
    viewBox='0 0 24 24'
  >
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M17.982 18.725A7.49 7.49 0 0 0 12 15.75a7.49 7.49 0 0 0-5.982 2.975m11.964 0a9 9 0 1 0-11.964 0m11.964 0A8.97 8.97 0 0 1 12 21a8.97 8.97 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0'
    />
  </svg>
);
