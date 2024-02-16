'use client';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import styles from './page.module.scss';

export default function Home() {
  const [userNumbers, setUserNumbers] = useState(4);
  const [windowSize, setWindowSize] = useState(0);

  const handleClick = () => {
    setUserNumbers(userNumbers + 4);
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    const windowSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', windowSize);
    return () => {
      window.removeEventListener('resize', windowSize);
    };
  }, []);

  useEffect(() => {
    if (windowSize < 1115) {
      setUserNumbers(4);
    } else {
      setUserNumbers(8);
    }
  }, [windowSize]);

  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <section className={styles.content}>
          <ul className={styles.content__list}>
            <Card userNumbers={userNumbers}></Card>
          </ul>
          <button className={styles.content__button} onClick={handleClick}>
            Показать еще <div className={styles.content__arrow}></div>
          </button>
        </section>
      </main>
    </>
  );
}
