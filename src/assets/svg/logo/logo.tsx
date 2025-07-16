import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const LogoVG: FC<SVGType> = ({
  color = 'var(--bg-color)',
  size = 24,
  contour = 'var(--accent-redesigned)',
}) => (
  <svg width={size} height={size} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width={size} height={size} rx='20' fill={contour} />
    <path
      d='M20 10s.552 5.15 2.7 7.3C24.85 19.447 30 20 30 20s-5.15.552-7.3 2.7C20.553 24.85 20 30 20 30s-.552-5.15-2.7-7.3C15.15 20.553 10 20 10 20s5.15-.552 7.3-2.7C19.447 15.15 20 10 20 10Z'
      fill={color}
    />
  </svg>
);
