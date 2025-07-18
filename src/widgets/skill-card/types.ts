// src/widgets/skill-card/types.ts
import type { TCard } from '@/shared/global-types';
import type { ReactNode } from 'react';

export type TSkillCardProps = {
  card: TCard;
  type: 'edit' | 'received' | 'sent' | 'offer';
  liked?: boolean;
  likeHandler: () => void;
  isAuthenticated?: boolean;
};

export type TSkillCardMenuProps = {
  liked: boolean;
  likeHandler: () => void;
  shareHandler: () => void;
};

export type TSkillCardButtonsProps = {
  type: TSkillCardProps['type'];
  handlers: {
    offer: () => void;
    edit: () => void;
    save: () => void;
    accept: () => void;
    decline: () => void;
  }
}

export type TSkillCardContentProps = {
  card: TSkillCardProps['card'];
  children: ReactNode;
}