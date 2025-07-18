import { type FC } from 'react';
import styles from './main.module.css';
import { CardListUI } from '@/shared/ui';
import { FilterBlock } from '@/widgets';
import type { commonFilterType, TMainSkillFilter } from '@/shared/global-types';
import { useDispatch, useSelector } from '@/services/store';
import {
  toggleEducationFilter,
  toggleGenderFilter,
  toggleSkillsFilter,
  getCitiesState,
  getEducationState,
  getGenderState,
  getSkillsState,
  toggleCityFilter,
  getCardsState,
  getLoadingState,
} from '@/services/slices';
// import { CARDS_DATA } from '@/shared/global-types/data-cards-example';
import { EnabledFiltersBlock } from '@/widgets/enabled-filters-block';
import {
  checkAllActiveFilters,
  filterCards,
  sorByRecommendedChaos,
  sortByNewest,
  sortByPopular,
} from '@/shared/lib/helpers/helpers';

export const Main: FC = () => {
  const dispatch = useDispatch();
  const educationState = useSelector(getEducationState);
  const genderState = useSelector(getGenderState);
  const skillsState = useSelector(getSkillsState);
  const citiesState = useSelector(getCitiesState);
  const cardsState = useSelector(getCardsState);
  const loading = useSelector(getLoadingState);

  // const cards = filterCards(CARDS_DATA, {
  //   education: educationState,
  //   gender: genderState,
  //   skills: skillsState,
  //   cities: citiesState,
  // });

  const cards = filterCards(cardsState, {
    education: educationState,
    gender: genderState,
    skills: skillsState,
    cities: citiesState,
  });

  const checkFiltersState = checkAllActiveFilters(
    skillsState,
    genderState,
    educationState,
    citiesState
  );

  const onEducationChange = (filters: commonFilterType[]) => {
    const activeFilter = filters.find((f) => f.status);
    if (activeFilter) {
      dispatch(toggleEducationFilter(activeFilter));
    }
  };

  const onGenderChange = (filters: commonFilterType[]) => {
    const activeFilter = filters.find((f) => f.status);
    if (activeFilter) {
      dispatch(toggleGenderFilter(activeFilter));
    }
  };

  const getSkillFilterValue = (data: TMainSkillFilter[]) => {
    dispatch(toggleSkillsFilter(data));
  };

  const onCityChange = (data: string) => {
    dispatch(toggleCityFilter(data));
  };

  // Веременно оставлю тут массивы карточек для отображения

  // const cardsPopular = sortByPopular(CARDS_DATA, 3);
  // const cardsNew = sortByNewest(CARDS_DATA, 3);
  // const cardsRecommendedChaos = sorByRecommendedChaos(CARDS_DATA);

  const cardsPopular = sortByPopular(cardsState, 3);
  const cardsNew = sortByNewest(cardsState, 3);
  const cardsRecommendedChaos = sorByRecommendedChaos(cardsState);

  const activeFilters = [
    ...educationState
      .filter((f) => f.status && f.value !== 'empty')
      .map((f) => ({
        id: f.value!,
        title: f.title,
        type: 'education',
      })),

    ...genderState
      .filter((f) => f.status && f.value !== 'empty')
      .map((f) => ({
        id: f.value!,
        title: f.title,
        type: 'gender',
      })),

    ...skillsState.flatMap((skill) =>
      skill.subFilters
        .filter((sf) => sf.status)
        .map((sf) => ({
          id: sf.id,
          title: sf.title,
          type: 'skill',
        }))
    ),

    ...citiesState
      .filter((city) => city.status)
      .map((city) => ({
        id: city.id,
        title: city.title,
        type: 'city',
      })),
  ];

  return (
    <main className={styles.main}>
      <div>
        <FilterBlock
          educationFilters={educationState}
          cityFilters={citiesState}
          skillFilters={skillsState}
          genderFilters={genderState}
          onSkillChange={getSkillFilterValue}
          onCityChange={onCityChange}
          onEducationChange={onEducationChange}
          onGenderChange={onGenderChange}
          activeFiltersCount={activeFilters.length}
        />
      </div>
      {checkFiltersState ? (
        <div className={styles.card_blocks}>
          {activeFilters.length > 0 && <EnabledFiltersBlock filters={activeFilters} />}
          {cards.length > 0 ? (
            <CardListUI
              title={`Подходящие предложения: ${cards.length}`}
              handleSort={() => {}} // пока заглушка
              cards={cards}
            />
          ) : (
            <h2 className={styles.noResultsTitle}>Ничего не найдено по вашему запросу</h2>
          )}
        </div>
      ) : (
        <div className={styles.card_blocks}>
          <CardListUI
            title='Популярное'
            handleOpen={() => {}}
            cards={cardsPopular}
            loading={loading}
          />
          <CardListUI title='Новое' handleOpen={() => {}} cards={cardsNew} loading={loading} />
          <CardListUI title='Рекомендуем' cards={cardsRecommendedChaos} loading={loading} />
        </div>
      )}
    </main>
  );
};
