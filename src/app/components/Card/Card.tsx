'use client';

import styles from './Card.module.scss';
import Image from 'next/image';
export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <Image className={styles.card__image} width={124} height={124} alt="photo" />
        <h2 className={styles.card__name}>Артур Королёв</h2>
      </div>
      <div className={styles.card__favorite}></div>
    </div>
  );
}
