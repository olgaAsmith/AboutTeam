import { useAppDispatch } from '@/lib/hooks';
import styles from './Header.module.scss';
import { logoutUser } from '@/lib/features/auth';
import { useRouter } from 'next/navigation';

export default function Header() {


  const dispatch = useAppDispatch();

  const router = useRouter();

  const logout = async () => {
    dispatch(logoutUser());
    router.push('/pages/auth/signup');
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <button className={`${styles.header__button} ${styles.header__button_back}`}>Назад</button>
        <button onClick={logout} className={styles.header__button}>Выход</button>
      </div>
      <div className={styles.header__describe}>
        <h1 className={styles.header__title}>Наша команда</h1>
        <h2 className={styles.header__subtitle}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </h2>
      </div>
    </header>
  );
}
