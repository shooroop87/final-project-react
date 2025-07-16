import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const PlusCircleSVG: FC<SVGType> = ({ color = 'var(--accent-redesigned)', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill={color}
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
      d='M15.721 12.698H8.28A.703.703 0 0 1 7.582 12c0-.381.316-.698.697-.698h7.442c.381 0 .698.317.698.698a.703.703 0 0 1-.698.698'
    />
    <path
      fill={color}
      d='M12 16.419a.703.703 0 0 1-.698-.698V8.279c0-.381.316-.698.698-.698s.698.317.698.698v7.442a.703.703 0 0 1-.698.698'
    />
  </svg>
);
