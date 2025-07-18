// src/widgets/userCard/type.ts
import type { TCard } from '@/shared/global-types';

export interface UserCardProps {
    card: TCard;
    type: 'short' | 'full';
}
