// src/widgets/skill-card/skill-card.tsx
import styles from './skill-card.module.css';
import type { TSkillCardProps } from './types';
import { useCallback, useMemo, useState } from 'react';
import { SkillCardMenu } from './skill-card-menu';
import { SkillCardButtons } from './skill-card-buttons';
import { SkillCardContent } from './skill-card-content';
import { SkillImageGalleryUI, Modal } from '@/shared/ui';
import { RegistrationInvite } from '@/widgets';
import { useNavigate } from 'react-router-dom';

export const SkillCard = ({
    card, 
    likes,
    type = 'offer',
    likeHandler,
    isAuthenticated = false,
  }: TSkillCardProps) => {
  const navigate = useNavigate();
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const shareHandler = useCallback(() => {
    const url = location.href;
    navigator.clipboard.writeText(url);
  }, []);

<<<<<<< HEAD
  const isLiked = likes?.includes(card.userId);

  const offerHandler = useCallback(() => {}, []);
=======
  const offerHandler = useCallback(() => {
    if (!isAuthenticated) {
      setIsRegistrationModalOpen(true);
      return;
    }
    
    // Здесь будет логика отправки предложения обмена для авторизованных пользователей
    console.log('Отправляем предложение обмена');
  }, [isAuthenticated]);

  const handleRegistrationModalCancel = useCallback(() => {
    setIsRegistrationModalOpen(false);
  }, []);

  const handleRegistrationModalRegister = useCallback(() => {
    setIsRegistrationModalOpen(false);
    navigate('/register');
  }, [navigate]);
>>>>>>> 5baf1c4 (Настроить переход в регистрацию при отправке заявки если пользователь не авторизован)

  const editHandler = useCallback(() => {}, []);

  const saveHandler = useCallback(() => {}, []);

  const acceptHandler = useCallback(() => {}, []);

  const declineHandler = useCallback(() => {}, []);

  const actionButtons = useMemo(() => (
    <SkillCardButtons
      type={type}
      handlers={{
        offer: offerHandler,
        edit: editHandler,
        save: saveHandler,
        accept: acceptHandler,
        decline: declineHandler,
      }}
    />
  ), [acceptHandler, declineHandler, editHandler, offerHandler, saveHandler, type]);

  return (
<<<<<<< HEAD
    <div className={styles.container}>
      <SkillCardMenu 
        liked={isLiked} 
        likeHandler={likeHandler} 
        shareHandler={shareHandler}
      />
      <div className={styles.content}>
        <SkillCardContent card={card}>{actionButtons}</SkillCardContent>
   
        <div className={styles['content-gallery']}>
          <SkillImageGalleryUI images={card.skillImages || []} />
=======
    <>
      <div className={styles.container}>
        <SkillCardMenu 
          liked={liked} 
          likeHandler={likeHandler} 
          shareHandler={shareHandler}
        />
        <div className={styles.content}>
          <SkillCardContent card={card}>{actionButtons}</SkillCardContent>
     
          <div className={styles['content-gallery']}>
            <SkillImageGalleryUI images={card.skillImages || []} />
          </div>
>>>>>>> 5baf1c4 (Настроить переход в регистрацию при отправке заявки если пользователь не авторизован)
        </div>
      </div>

      {isRegistrationModalOpen && (
        <Modal onClose={handleRegistrationModalCancel}>
          <RegistrationInvite
            onCancel={handleRegistrationModalCancel}
            onRegister={handleRegistrationModalRegister}
          />
        </Modal>
      )}
    </>
  );
};
