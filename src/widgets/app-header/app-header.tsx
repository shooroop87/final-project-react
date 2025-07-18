import { useRef, useState, type FC } from 'react';
import { useLocation } from 'react-router-dom';
import { AppHeaderUI } from '@/shared/ui/app-headerUI/app-header';
import { AllSkills } from '@/shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { getSkillsState, toggleSkillsFilter } from '@/services/slices';
import type { TMainSkillFilter } from '@/shared/global-types';

// import { useSelector } from '@/services/store';
// import { userSelectors } from '@/services/slices/user';
// import { USERS_DATA } from '@/shared/global-types/data-users-example';

export const AppHeader: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const skillList = useSelector(getSkillsState);
  const isLoginOrRegister = ['/login', '/register'].includes(currentPath);

  // TODO найти пользователя как добавят селектор в слайс юзера
  // const user = useSelector(userSelectors.userDataSelector);

  // TODO Для проверки
  // const user = USERS_DATA[7];
  const user = {
    name: 'Мария',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  const headerRef = useRef<HTMLElement>(null);

  const [isAllSkillsVisible, setIsAllSkillsVisible] = useState(false);

  const toggleAllSkills = () => {
    setIsAllSkillsVisible((prev) => !prev);
  };

  const handleCloseSkills = () => {
    setIsAllSkillsVisible(false);
  };

  const handleSelectFilter = (data: TMainSkillFilter[]) => {
    dispatch(toggleSkillsFilter(data));
  };

  return (
    <>
      <header ref={headerRef}>
        <AppHeaderUI
          onSkillsClick={toggleAllSkills}
          onToggleTheme={() => {}}
          onNotificationClick={() => {}}
          onLikeClick={() => {}}
          onClearButtonClick={() => {}}
          user={user}
          isLoginOrRegister={isLoginOrRegister}
        />
      </header>
      {isAllSkillsVisible && (
        <AllSkills
          onClose={handleCloseSkills}
          mainFilters={skillList}
          headerRef={headerRef}
          onSelect={handleSelectFilter}
        />
      )}
    </>
  );
};
