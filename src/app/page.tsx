'use client';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import styles from './page.module.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { fetchApiUsers } from '@/lib/features/userList';

export default function Home() {
  const [userNumbers, setUserNumbers] = useState(4);
  const [windowSize, setWindowSize] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isButtonExist, setIsButtonExist] = useState(true);

  const router = useRouter();

  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector((state) => state.auth);
  const apiListData = useAppSelector((state) => state.userList.usersData);

  useEffect(() => {
    dispatch(fetchApiUsers());
  }, [dispatch]);

  useEffect(() => {
    if (apiListData.length <= userNumbers) {
      setIsButtonExist(false);
    } else {
      setIsButtonExist(true);
    }
  }, [apiListData.length, userNumbers]);

  useEffect(() => {
    if (isLogin) {
      setIsLoading(false);
    } else {
      router.push('/pages/auth/signup');
    }
  }, [isLogin, router]);

  //* handle amount cards by diff screen size
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
      {isLoading ? (
        ''
      ) : (
        <>
          <Header />
          <main className={styles.main}>
            <section className={styles.content}>
              <ul className={styles.content__list}>
                <Card userNumbers={userNumbers} />
              </ul>
              {isButtonExist && (
                <button className={styles.content__button} onClick={handleClick}>
                  Показать еще <div className={styles.content__arrow}></div>
                </button>
              )}
            </section>
          </main>
        </>
      )}
    </>
  );
}
