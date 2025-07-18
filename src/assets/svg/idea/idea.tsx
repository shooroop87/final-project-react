import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const IdeaSVG: FC<SVGType> = ({ color = 'var(--text-redesigned)', size = 24 }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.09 14.999a6.9 6.9 0 0 1-.59-2.794C5.5 8.5 8.41 5.499 12 5.499s6.5 3.002 6.5 6.706a6.9 6.9 0 0 1-.59 2.794m-5.91-13v1m10 9h-1m-18 0H2m17.07-7.071-.707.707m-12.726.001-.707-.707m9.587 14.377c1.01-.327 1.416-1.252 1.53-2.182.034-.278-.195-.509-.475-.509H8.477a.483.483 0 0 0-.488.534c.112.928.394 1.606 1.464 2.156m5.064.001-5.064-.001m5.064.001c-.121 1.945-.683 2.715-2.51 2.693-1.954.036-2.404-.917-2.554-2.694'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
