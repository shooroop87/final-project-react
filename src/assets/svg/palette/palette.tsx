import type { FC } from 'react';
import type { SVGType } from '../svg.type';

export const PaletteSVG: FC<SVGType> = ({ color = 'var(--text-redesigned)', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 24 24'
  >
    <path
      fill={color}
      d='M12 4C6.54 4 2 7.516 2 12v.002c.002.499.062.997.18 1.486a.5.5 0 0 0 .656.354q.25-.09.506-.162c3.246-.87 6.386.652 7.09 3.277.2.753.184 1.553-.047 2.342a.5.5 0 0 0 .43.639q.588.06 1.181.062H12c5.46 0 10-3.516 10-8s-4.54-8-10-8m0 1c5.033 0 9 3.2 9 7s-3.965 6.998-8.996 7c-.216-.001-.431-.022-.647-.035.133-.76.235-1.53.04-2.266-.869-3.241-4.622-4.97-8.31-3.984-.032-.24-.086-.476-.087-.717C3.001 8.199 6.967 5 12 5m-.5 1c-.822 0-1.5.677-1.5 1.5 0 .822.678 1.5 1.5 1.5S13 8.322 13 7.5c0-.823-.678-1.5-1.5-1.5m-4 1C6.678 7 6 7.677 6 8.5c0 .822.678 1.5 1.5 1.5S9 9.322 9 8.5C9 7.677 8.322 7 7.5 7m4 0c.282 0 .5.218.5.5s-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5m4 0c-.822 0-1.5.677-1.5 1.5 0 .822.678 1.5 1.5 1.5.823 0 1.5-.678 1.5-1.5 0-.823-.677-1.5-1.5-1.5m-8 1c.282 0 .5.218.5.5s-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5m8 0c.282 0 .5.218.5.5s-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5m3 2c-.823 0-1.5.678-1.5 1.5s.677 1.5 1.5 1.5 1.5-.678 1.5-1.5-.677-1.5-1.5-1.5m0 1c.282 0 .5.218.5.5s-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5m-3 3c-.822 0-1.5.678-1.5 1.5 0 .823.678 1.5 1.5 1.5.823 0 1.5-.677 1.5-1.5 0-.822-.677-1.5-1.5-1.5m0 1c.282 0 .5.218.5.5s-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5'
    />
  </svg>
);
