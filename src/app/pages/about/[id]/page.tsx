'use client';
import Header from '@/app/components/Header/Header';
import styles from './page.module.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect, useState } from 'react';
import { fetchApiUsers } from '@/lib/features/userList';

export default function About({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const apiListData = useAppSelector((state) => state.userList.usersData);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    dispatch(fetchApiUsers());
  }, [dispatch]);

  const user = apiListData.find((card) => card.id === parseInt(params.id));

  return (
    <>
      <Header
        userFirstName={user?.first_name}
        userLastName={user?.last_name}
        userAvatar={user?.avatar}></Header>
      {isLoading ? (
        ''
      ) : (
        <main className={styles.main}>
          <section className={styles.about}>
            <p className={styles.about__description}>
              Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых
              продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и
              ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса,
              улучшать процессы за счет применения новейших технологий и увеличивать продажи,
              используя самые современные аналитические инструменты. В работе с клиентами
              недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не
              менее важно уделять внимание обмену знаниями: &quot;Один из самых позитивных моментов — это
              осознание того, что ты помог клиенту перейти на совершенно новый уровень
              компетентности, уверенность в том, что после окончания проекта у клиента есть все
              необходимое, чтобы дальше развиваться самостоятельно&quot;. Помимо разнообразных проектов
              для клиентов финансового сектора, Сорин ведет активную предпринимательскую
              деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии,
              предлагающей инновационный подход к красоте, а также инвестором других
              бизнес-проектов.
            </p>
            <div className={styles.about__contacts}>
              <div className={styles.about__contact}>
                <div className={`${styles.about__image} ${styles.about__image_tel}`}></div>
                <p className={styles.about__call}>{user?.email}</p>
              </div>
              <div className={styles.about__contact}>
                <div className={`${styles.about__image} ${styles.about__image_email}`}></div>
                <p className={styles.about__email}>{user?.email}</p>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
