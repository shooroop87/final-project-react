// src/shared/ui/userCardUI/user-card.tsx
import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAge } from '../../lib/helpers/helpers';
import type { UserCardUIProps } from './types';
import { SkillItemUI } from '../skillItemUI';
import { Modal } from '../modalUI';
import { RegistrationInvite } from '@/widgets/modalBlocks';

import styles from './user-card.module.css';
import { LikeSVG } from '@/assets/svg/like';
import { ButtonUI } from '../buttonUI';
import clsx from 'clsx';
import type { TSkill } from '@/shared/global-types';

export const UserCardUI: FC<UserCardUIProps> = ({
  card,
  type,
  setLike,
  isAuthenticated = false, // добавяляю проп для проверки авторизации
}) => {
  const navigate = useNavigate();
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  // метод по созданию списка навыков. Будет лучше если он будет лежать здесь
  // решил что сам метод останется тут, но сам компонент навыка я сделал отдельным компонентом
  const renderSkills = (skills: TSkill[], limit = 2) => {
    const firstSkills = skills.slice(0, limit);
    const restCount = skills.length - limit;

    return (
      <>
        {firstSkills.map((skill, index) => (
          <SkillItemUI type={skill.type} key={index} className={clsx(styles.skill_item, styles[skill.type])}>
            {skill.title}
          </SkillItemUI>
        ))}

        {restCount > 0 && <div className={clsx(styles.skill_item, styles.other, styles.plus)}>{`+${restCount}`}</div>}
      </>
    );
  };

  // Обработчик клика по кнопке "Подробнее"
  const handleDetailClick = () => {
    if (!isAuthenticated) {
      setIsRegistrationModalOpen(true);
      return;
    }
    
    // Если пользователь авторизован, переходим на страницу навыка
    navigate(`/skill/${card.userId}`);
  };

  // Обработчики для модалки регистрации
  const handleRegistrationModalClose = () => {
    setIsRegistrationModalOpen(false);
  };

  const handleGoToRegistration = () => {
    setIsRegistrationModalOpen(false);
    navigate('/register');
  };

  return (
    <>
      <article className={styles.card}>
        <div className={styles.info}>
          <div className={styles.profile_image_container}>
            <img className={styles.profile_image} src={card.src} alt='фотография пользователя' />
          </div>
          <div className={styles.user_data}>
            <span className={styles.data_name}>{card.name}</span>
            <span className={styles.data_other}>{`${card.city}, ${formatAge(card.age)}`}</span>
          </div>
          {type === 'short' && (
            <ButtonUI type='button' onClick={setLike} className={styles.button_like}>
              <LikeSVG width='24px' height='24px' />
            </ButtonUI>
          )}
        </div>
        {/* заметил что карточка по сути переиспользуется на странице выбранных карточек, добавил проверку там где надо*/}
        {type === 'full' && <p className={styles.user_description}>{card.description}</p>}
        <div className={styles.skills_section}>
          <div className={styles.skills_container}>
            <span className={styles.skills_text}>Может научить</span>
            <ul className={styles.skills_list}>{renderSkills(card.teachSkill, 2)}</ul>
          </div>
          <div className={styles.skills_container}>
            <span className={styles.skills_text}>Хочет научиться</span>
            <ul className={styles.skills_list}>{renderSkills(card.learnSkill, 2)}</ul>
          </div>
        </div>
        {type === 'short' && (
          <ButtonUI type='button' onClick={handleDetailClick} className={styles.button_link}>
            Подробнее
          </ButtonUI>
        )}
      </article>

      {/* Модалка приглашения к регистрации */}
      {isRegistrationModalOpen && (
        <Modal onClose={handleRegistrationModalClose}>
          <RegistrationInvite
            onRegister={handleGoToRegistration}
            onCancel={handleRegistrationModalClose}
          />
        </Modal>
      )}
    </>
  );
};
