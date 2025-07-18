import type { TCard } from '@/shared/global-types';

export interface UserCardProps {
    card: TCard;
    type: 'short' | 'full';
    isAuthenticated?: boolean; // добавляю новый проп
}
