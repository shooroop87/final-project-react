import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const SearchSVG: FC<SVGType> = ({ color = 'var(--accent-redesigned)', size = 24 }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11.535 21.07C6.279 21.07 2 16.79 2 11.535 2 6.279 6.28 2 11.535 2c5.256 0 9.535 4.28 9.535 9.535 0 5.256-4.28 9.535-9.535 9.535m0-17.675c-4.493 0-8.14 3.656-8.14 8.14s3.647 8.14 8.14 8.14 8.14-3.656 8.14-8.14-3.647-8.14-8.14-8.14M21.302 22a.7.7 0 0 1-.493-.205l-1.86-1.86a.7.7 0 0 1 0-.986c.27-.27.716-.27.986 0l1.86 1.86c.27.27.27.717 0 .986a.7.7 0 0 1-.493.205'
      fill={color}
    />
  </svg>
);
