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
<<<<<<< HEAD
import { getCardsState, getCardsLoadingState, selectLikes, selectUserData } from '@/services/slices';
import { filterSameOffers } from '@/shared/lib/helpers/helpers';
=======

// Импортируем селектор для проверки авторизации
// TODO: Заменить на правильный селектор когда будет готов userSlice
const getIsAuthenticated = (state: any) => state.user?.isAuth || false;
>>>>>>> 5baf1c4 (Настроить переход в регистрацию при отправке заявки если пользователь не авторизован)

export const SkillPage: FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { userId } = useParams();
<<<<<<< HEAD
  // const [currentPage, setCurrentPage] = useState(0);
  // const user = useSelector(userSelectors.userDataSelector); // поиск юзера в виджете юзеркард
=======
  const isAuthenticated = useSelector(getIsAuthenticated);
>>>>>>> 5baf1c4 (Настроить переход в регистрацию при отправке заявки если пользователь не авторизован)

  const user = useSelector(selectUserData);
  const likes = useSelector(selectLikes);

  const cardsState = useSelector(getCardsState);
  const loading = useSelector(getCardsLoadingState);
  console.log(cardsState);

  if (cardsState.length === 0) {
    return <PreloaderUI></PreloaderUI>;
  }
  const card = cardsState.find((card) => card.userId === userId)!;

  const sameOffers = filterSameOffers(card, cardsState);

<<<<<<< HEAD
  // const prevPageHandler = useCallback(() => {
  //   if (currentPage > 0) setCurrentPage(currentPage - 1);
  // }, [currentPage]);
=======
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
>>>>>>> 5baf1c4 (Настроить переход в регистрацию при отправке заявки если пользователь не авторизован)

  return (
    <>
      <main className={styles.container}>
        <ButtonUI type='link' to='/' className={styles.button}>
          <ArrowLeftSVG color='var(--grey-deep-color)' />
          <span> Главная / </span> <span>{card.teachSkill[0].type} / </span>{' '}
          <span>{card.teachSkill[0].subType} / </span> <span>{card.teachSkill[0].title}</span>
        </ButtonUI>
        <div className={styles.skill_content}>
<<<<<<< HEAD
          <UserCard card={card} type='full' user={user}/>
          <SkillCard card={card} type='offer' likeHandler={() => {}} likes={likes} />
=======
          {/* UserCard теперь не требует проверки авторизации */}
          <UserCard card={card} type='full' />
          {/* Только SkillCard проверяет авторизацию для функционала обмена */}
          <SkillCard 
            card={card} 
            type='offer' 
            likeHandler={() => {}} 
            isAuthenticated={isAuthenticated}
          />
>>>>>>> 5baf1c4 (Настроить переход в регистрацию при отправке заявки если пользователь не авторизован)
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
    </>
  );
};
