import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <button className={styles.header__button}>Назад</button>
        <button className={styles.header__button}>Выход</button>
      </div>
      <div className={styles.header__describe}>
        <h1 className={styles.header__title}>Наша команда</h1>
        <h2 className={styles.header__subtitle}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </h2>
      </div>
    </header>
  );
}
