// src/shared/ui/app-headerUI/type.ts
import type { TUser } from '@/shared/global-types';
import type { SearchSuggestion } from '../search-fieldUI/type';

export type HeaderUserData = Pick<TUser, 'name' | 'image'>;

export type TAppHeaderUIProps = {
  onSkillsClick: () => void;
  onToggleTheme: () => void;
  onNotificationClick: () => void;
  onLikeClick: () => void;
  onClearButtonClick: () => void;
  onSearch?: (suggestion: SearchSuggestion) => void;
  user: HeaderUserData | undefined;
  isLoginOrRegister: boolean;
};
