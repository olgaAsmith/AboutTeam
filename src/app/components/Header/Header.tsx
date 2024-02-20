import { useAppDispatch } from '@/lib/hooks';
import styles from './Header.module.scss';
import { logout } from '@/lib/features/auth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import avatar from './../../../images/default_logo.jpg';

export default function Header({ userFirstName, userLastName, userAvatar }: {
  userFirstName?: string;
  userLastName?: string;
  userAvatar?: string;
}) {
  const [isPageAbout, setIsPageAbout] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const currentPath = usePathname();
  const dispatch = useAppDispatch();

  //*makes header invis while loading on "about" pages
  useEffect(() => {
    const getData = async () => {
      const pathPattern = /^\/pages\/about\/\d+$/;
      setIsPageAbout(pathPattern.test(currentPath));
      setIsLoading(false);
    };
    getData();
  }, [currentPath]);

  const handleClickBack = () => {
    router.back();
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push('/pages/auth/signup');
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <button
          onClick={handleClickBack}
          className={`${styles.header__button} ${styles.header__button_back} ${isPageAbout ? styles.header__button_back_visible : ''}`}
        >
          Назад
        </button>
        {isPageAbout ? (
          <div className={styles.person}>
            <Image src={userAvatar || avatar} alt={`${userFirstName} ${userLastName}`} className={styles.person__photo} width={187} height={187} />
            <div className={styles.person__info}>
              <h1 className={styles.person__name}>{userFirstName} {userLastName}</h1>
              <h2 className={styles.person__job}>Партнер</h2>
            </div>
          </div>
        ) : (
          ''
        )}

        <button onClick={handleLogout} className={styles.header__button}>
          Выход
        </button>
      </div>

      {isPageAbout ? (
        ''
      ) : (
        <div className={styles.header__describe}>
          <h1 className={styles.header__title}>Наша команда</h1>
          <h2 className={styles.header__subtitle}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
            плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
          </h2>
        </div>
      )}
    </header>
  );
}
