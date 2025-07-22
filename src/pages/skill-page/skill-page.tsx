// src/pages/skill-page/skill-page.tsx
import styles from './skill-page.module.css';
import { UserCard } from '@/widgets';
import { useEffect, type FC } from 'react';
import { ArrowLeftSVG } from '@/assets/svg';
import { ButtonUI, PreloaderUI } from '@/shared/ui';
import { SameOffers } from '@/widgets/same-offers';
import { SkillCard } from '@/widgets/skill-card';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from '@/services/store';
import {
  getCardsState,
  getCardsLoadingState,
  selectLikes,
  selectUserData,
  getIsAuthenticated, // Используем правильный селектор
} from '@/services/slices';
import { filterSameOffers } from '@/shared/lib/helpers/helpers';

export const SkillPage: FC = () => {
  const location = useLocation();
  const { userId } = useParams();
  const isAuthenticated = useSelector(getIsAuthenticated); // Исправленный селектор

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const user = useSelector(selectUserData);
  const likes = useSelector(selectLikes);
  const cardsState = useSelector(getCardsState);
  const loading = useSelector(getCardsLoadingState);

  console.log('isAuthenticated:', isAuthenticated);
  console.log('user:', user);
  console.log('cardsState:', cardsState.length);

  if (loading || cardsState.length === 0) {
    return <PreloaderUI />;
  }

  const card = cardsState.find((card) => card.userId === userId);
  
  if (!card) {
    return (
      <main className={styles.container}>
        <ButtonUI type='link' to='/' className={styles.button}>
          <ArrowLeftSVG color='var(--grey-deep-color)' />
          <span>Назад к главной</span>
        </ButtonUI>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h2>Карточка не найдена</h2>
          <p>Возможно, карточка была удалена или ссылка неверная</p>
        </div>
      </main>
    );
  }

  const sameOffers = filterSameOffers(card, cardsState);

  return (
    <main className={styles.container}>
      <ButtonUI type='link' to='/' className={styles.button}>
        <ArrowLeftSVG color='var(--grey-deep-color)' />
        <span> Главная / </span>
        <span>{card.teachSkill[0]?.type} / </span>
        <span>{card.teachSkill[0]?.subType} / </span>
        <span>{card.teachSkill[0]?.title}</span>
      </ButtonUI>

      <div className={styles.skill_content}>
        {/* UserCard теперь не требует проверки авторизации */}
        <UserCard card={card} type='full' user={user} />
        {/* Только SkillCard проверяет авторизацию для функционала обмена */}
        <SkillCard
          card={card}
          type='offer'
          likeHandler={() => {}}
          likes={likes || []}
          isAuthenticated={isAuthenticated}
        />
      </div>

      <div className={styles.same_offers}>
        <h1>Похожие предложения</h1>
        {loading ? (
          <PreloaderUI />
        ) : sameOffers.length ? (
          <SameOffers cardsData={sameOffers} />
        ) : (
          <h2 className={styles.no_results_title}>Ничего не найдено</h2>
        )}
      </div>
    </main>
  );
};
