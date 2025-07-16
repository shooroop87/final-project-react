import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const CheckboxRemoveSVG: FC<SVGType> = ({ color = 'var(--accent-redesigned)', size = 24 }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.791 2C19.841 2 22 4.158 22 9.209v5.582C22 19.841 19.842 22 14.791 22H9.209C4.159 22 2 19.842 2 14.791V9.209C2 4.159 4.158 2 9.209 2zM8 11.25c-.41 0-.75.34-.75.75s.34.75.75.75h8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z'
      fill={color}
    />
  </svg>
);
