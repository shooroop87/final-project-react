import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const LifestyleSVG: FC<SVGType> = ({ color = 'var(--text-redesigned)', size = 24 }) => (
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
      d='M14.823 8.637c-3.838-2.479-7.809-.7-11.478-4.584-.855-.907-.358 10.165 4.235 14.361 3.358 3.065 8.542 2.723 10.29-.255 1.749-2.979.79-7.044-3.048-9.522'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M8.395 12.159c3.712 3.496 7.554 5.568 12.605 6.345'
    />
  </svg>
);
