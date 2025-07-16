import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const ChevronRightSVG: FC<SVGType> = ({ color = 'var(--text-redesigned)', size = 24 }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.69 20a.69.69 0 0 1-.49-.203.696.696 0 0 1 0-.978l6.018-6.017a1.136 1.136 0 0 0 0-1.606L8.2 5.179a.696.696 0 0 1 0-.978.696.696 0 0 1 .978 0l6.017 6.017c.47.47.738 1.107.738 1.78 0 .675-.258 1.311-.738 1.782l-6.017 6.017a.73.73 0 0 1-.49.203'
      fill={color}
    />
  </svg>
);
