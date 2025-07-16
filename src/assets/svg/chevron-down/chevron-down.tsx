import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const ChevronDownSVG: FC<SVGType> = ({ color = 'var(--text-redesigned)', size = 24 }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 15.935c-.646 0-1.292-.249-1.781-.738L4.2 9.179a.696.696 0 0 1 0-.978.696.696 0 0 1 .978 0l6.018 6.018a1.136 1.136 0 0 0 1.606 0L18.821 8.2a.696.696 0 0 1 .978 0 .696.696 0 0 1 0 .978l-6.018 6.018c-.489.49-1.135.738-1.781.738'
      fill={color}
    />
  </svg>
);
