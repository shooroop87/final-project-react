// src/shared/ui/userCardUI/user-card.tsx
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAge } from '../../lib/helpers/helpers';
import type { UserCardUIProps } from './types';
import { SkillItemUI } from '../skillItemUI';

import styles from './user-card.module.css';
import { LikeSVG } from '@/assets/svg/like';
import { ButtonUI } from '../buttonUI';
import clsx from 'clsx';
import type { TSkill } from '@/shared/global-types';

<<<<<<< HEAD
export const UserCardUI: FC<UserCardUIProps> = ({ card, type, setLike, isLiked }) => {
=======
export const UserCardUI: FC<UserCardUIProps> = ({
  card,
  type,
  setLike,
}) => {
  const navigate = useNavigate();

>>>>>>> 5baf1c4 (Настроить переход в регистрацию при отправке заявки если пользователь не авторизован)
  // метод по созданию списка навыков. Будет лучше если он будет лежать здесь
  // решил что сам метод останется тут, но сам компонент навыка я сделал отдельным компонентом
  const renderSkills = (skills: TSkill[], limit = 2) => {
    const firstSkills = skills.slice(0, limit);
    const restCount = skills.length - limit;

    return (
      <>
        {firstSkills.map((skill, index) => (
          <SkillItemUI
            type={skill.type}
            key={index}
            className={clsx(styles.skill_item, styles[skill.type])}
          >
            {skill.title}
          </SkillItemUI>
        ))}

        {restCount > 0 && (
          <div
            className={clsx(styles.skill_item, styles.other, styles.plus)}
          >{`+${restCount}`}</div>
        )}
      </>
    );
  };

  // Обработчик клика по кнопке "Подробнее" - просто переходим на страницу навыка
  const handleDetailClick = () => {
    navigate(`/skill/${card.userId}`);
  };

  return (
    <article className={`${styles.card} ${type === 'full' && styles.card_full}`}>
      <div className={styles.info}>
        <div className={styles.profile_image_container}>
          <img className={styles.profile_image} src={card.src} alt='фотография пользователя' />
        </div>
        <div className={styles.user_data}>
          <span className={styles.data_name}>{card.name}</span>
          <span className={styles.data_other}>{`${card.city}, ${formatAge(card.age)}`}</span>
        </div>
        {type === 'short' && (
          <ButtonUI type='button' onClick={() => setLike(card.id)} className={styles.button_like}>
            {isLiked ? (
              <LikeSVG width='24px' height='24px' color='var(--accent-redesigned)'/>
            ) : (
              <LikeSVG width='24px' height='24px' />
            )}
          </ButtonUI>
        )}
      </div>
      {/* заметил что карточка по сути переиспользуется на странице выбранных карточек, добавил проверку там где надо*/}
      {type === 'full' && <p className={styles.user_description}>{card.description}</p>}
      <div className={`${styles.skills_section} ${type === 'full' && styles.skills_section_full}`}>
        <div className={`${styles.skills_container} ${type === 'full' && styles.skills_container_full}`}>
          <span className={styles.skills_text}>Может научить:</span>
          <ul className={styles.skills_list}>{renderSkills(card.teachSkill, 2)}</ul>
        </div>
        <div className={`${styles.skills_container} ${type === 'full' && styles.skills_container_full}`}>
          <span className={styles.skills_text}>Хочет научиться:</span>
          <ul className={styles.skills_list}>{renderSkills(card.learnSkill, 2)}</ul>
        </div>
      </div>
      {type === 'short' && (
<<<<<<< HEAD
        <ButtonUI type='link' to={`/skill/${card.userId}`} className={styles.button_link}>
=======
        <ButtonUI type='button' onClick={handleDetailClick} className={styles.button_link}>
>>>>>>> 5baf1c4 (Настроить переход в регистрацию при отправке заявки если пользователь не авторизован)
          Подробнее
        </ButtonUI>
      )}
    </article>
  );
};
