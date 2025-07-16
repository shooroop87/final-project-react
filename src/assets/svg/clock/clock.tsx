import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const ClockSVG: FC<SVGType> = ({ color = 'var(--text-redesigned)', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    width={size}
    height={size}
    viewBox='0 0 24 24'
  >
    <path
      fill={color}
      d='M12 22C6.484 22 2 17.516 2 12S6.484 2 12 2s10 4.484 10 10-4.484 10-10 10m0-18.605c-4.744 0-8.605 3.86-8.605 8.605 0 4.744 3.86 8.605 8.605 8.605 4.744 0 8.605-3.86 8.605-8.605 0-4.744-3.86-8.605-8.605-8.605'
    />
    <path
      fill={color}
      d='M15.452 15.656a.62.62 0 0 1-.354-.103l-2.884-1.72c-.716-.428-1.246-1.368-1.246-2.196V7.823c0-.381.316-.697.697-.697.382 0 .698.316.698.697v3.814c0 .335.28.828.568.996l2.883 1.72a.696.696 0 0 1 .242.959.72.72 0 0 1-.605.344'
    />
  </svg>
);
