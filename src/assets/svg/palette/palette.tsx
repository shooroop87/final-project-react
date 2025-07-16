import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const PaletteSVG: FC<SVGType> = ({ color = 'var(--text-redesigned)', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    width={size}
    height={size}
    viewBox='0 0 24 24'
  >
    <path
      fill={color}
      d='M15.404 8.784a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m-4.498-.813a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M7.404 10.69a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m-.969 4.216a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m2.219 3.792a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5'
    />
    <path
      stroke={color}
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M21.25 12.25A9.25 9.25 0 1 0 12 21.5c1.318 0 2.224-1.28 2.329-2.594l.117-1.473a3 3 0 0 1 2.758-2.752l1.651-.129c1.28-.1 2.395-1.019 2.395-2.302Z'
    />
  </svg>
);
