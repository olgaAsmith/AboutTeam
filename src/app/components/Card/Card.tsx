'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import styles from './Card.module.scss';
import Image from 'next/image';
import { FC, useEffect } from 'react';
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
  const dispatch = useAppDispatch();
  const apiListData = useAppSelector((state) => state.userList.usersData);
  const route = useRouter();

  useEffect(() => {
    dispatch(fetchApiUsers());
  }, [dispatch]);

  const handleOpenCard = (id: number) => {
    route.push(`/pages/about/${id}`)
};

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
              <div className={styles.card__favorite}></div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;
