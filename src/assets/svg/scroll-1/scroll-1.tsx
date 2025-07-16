import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const Scroll_1SVG: FC<SVGType> = ({ color = 'var(--text-redesigned)', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    width={size}
    height={size}
    viewBox='0 0 24 24'
  >
    <path
      fill={color}
      d='M12.5 22a2.35 2.35 0 0 1-1.67-.698l-5.642-5.688a.66.66 0 0 1 0-.924.65.65 0 0 1 .917 0l5.642 5.687a1.06 1.06 0 0 0 1.506 0l5.642-5.687a.65.65 0 0 1 .917 0c.25.253.25.671 0 .924l-5.642 5.688A2.35 2.35 0 0 1 12.5 22m0-20a2.35 2.35 0 0 0-1.67.698L5.188 8.386a.66.66 0 0 0 0 .924.65.65 0 0 0 .917 0l5.642-5.687a1.06 1.06 0 0 1 1.506 0l5.642 5.687a.65.65 0 0 0 .917 0 .66.66 0 0 0 0-.924L14.17 2.698A2.35 2.35 0 0 0 12.5 2'
    />
  </svg>
);
