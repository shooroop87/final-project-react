import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const ArrowLeftSVG:FC<SVGType> = ({ color = 'var(--text-redesigned)', size = 24 }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill={color} xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.57 18.82c-.19 0-.38-.07-.53-.22l-6.07-6.07a.754.754 0 0 1 0-1.06L9.04 5.4c.29-.29.77-.29 1.06 0s.29.77 0 1.06L4.56 12l5.54 5.54c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22'
      fill={color}
    />
    <path
      d='M20.5 12.75H3.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H20.5c.41 0 .75.34.75.75s-.34.75-.75.75'
      fill={color}
    />
  </svg>
);
