import React, { useEffect } from 'react';
import styles from './recommended.module.css';
import { sorByRecommendedChaos, sortByRecommendedSkills } from '@/shared/lib/helpers/helpers';
import { UserCardUI } from '@/shared/ui/userCardUI';
import { ButtonUI } from '@/shared/ui';
import type { RecommendedProps } from './type';
import { ChevronRightSVG } from '@/assets/svg';

export const Recommended: React.FC<RecommendedProps> = ({ cards, userCard }) => {
  const recommendedCards = userCard
    ? sortByRecommendedSkills(cards, userCard, 20)
    : sorByRecommendedChaos(cards, 20);
  // Заготовка под проверку - если юзер зареган, тогда выводить карты с похожими интересами, иначе - рандомные;
  // Сейчас выводит рандомные, поскольку авторизация не подключена

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles['main']}>
      <div className={styles['menu']}>
        <h2 className={styles['menu__title']}>Рекомендуемое</h2>
        <ButtonUI className={styles['menu__btn']} type='link' to='/'>
          <span className={styles.chevron}>
            <ChevronRightSVG color='currentColor' />
          </span>
          <span>Вернуться назад</span>
        </ButtonUI>
      </div>

      <div className={styles['card-list']}>
        {recommendedCards.map((card) => (
          // ПОРАВИТЬ ЛОГИКУ
          <UserCardUI key={card.id} card={card} type='short' setLike={() => {}} isLiked={false}/>
        ))}
      </div>
    </div>
  );
};
