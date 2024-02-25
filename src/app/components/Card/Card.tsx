'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import styles from './Card.module.scss';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { fetchApiUsers } from '@/lib/features/userList';
import React from 'react';
import { useRouter } from 'next/navigation';
interface CardProps {
  /**
   * Number of users on render
   */
  userNumbers: number;
}

const Card: FC<CardProps> = (props) => {

  const [likedCards, setLikedCards] = useState<{ [id: number]: boolean }>({});
  
  const dispatch = useAppDispatch();
  const apiListData = useAppSelector((state) => state.userList.usersData);
  const route = useRouter();

  useEffect(() => {
    dispatch(fetchApiUsers());
  }, [dispatch]);

  const handleOpenCard = (id: number) => {
    route.push(`/pages/about/${id}`)
};

const handleAddFavorite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
  e.stopPropagation()
  setLikedCards((likedCards) => ({
    ...likedCards,
    [id]: !likedCards[id],
  }));
}
  return (
    <>
      {apiListData &&
        apiListData.slice(0, props.userNumbers).map((item) => (
          <div key={item.id} className={styles.card} onClick={()=>handleOpenCard(item.id)}>
            <div className={styles.card__content}>
              <Image
                src={item.avatar}
                className={styles.card__image}
                width={124}
                height={124}
                alt={`${item.first_name} ${item.last_name}`}
              />
              <h2 className={styles.card__name}>
                {item.first_name} {item.last_name}
              </h2>
              <div onClick={(e) => handleAddFavorite(e, item.id)} className={`${styles.card__favorite} ${likedCards[item.id] ? styles.card__favorite_active : ''}`}></div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;
