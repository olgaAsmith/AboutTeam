import Card from './components/Card/Card';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <ul className={styles.content__list}>
          <Card></Card>
        </ul>
        <button className={styles.content__button}>Показать еще <div className={styles.content__arrow}></div></button>
      </section>
    </main>
  );
}
