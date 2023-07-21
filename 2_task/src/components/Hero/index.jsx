import clsx from "clsx";
import styles from "./style.module.scss";

const Hero = () => {
  return (
    <div className={clsx("container", styles.container)}>
      <section className={styles.hero}>
        <div className={styles.intro}>
          <h1 className={styles.title}>
            Зарабатывайте больше <span>с WELBEX</span>
          </h1>
          <p className={styles.subtitle}>
            Развиваем и контролируем продажи за вас
          </p>
        </div>

        <div className={styles.info}>
          <h3 className={styles.infoTitle}>
            Вместе с <span>бесплатной консультацией</span> мы дарим:
          </h3>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <span>Виджеты</span>
              30 готовых решений
            </li>
            <li className={styles.infoItem}>
              <span>Dashboard</span>
              с показателями вашего бизнеса
            </li>
            <li className={styles.infoItem}>
              <span>Skype Аудит</span>
              отдела продажи
              <br />
               CRM системы
            </li>
            <li className={styles.infoItem}>
              <span>35 дней</span>
              использования CRM
            </li>
          </ul>
          <ul className={clsx(styles.infoList, styles.infoListMobile)}>
            <li className={styles.infoItem}>Skype аудит</li>
            <li className={styles.infoItem}>30 виджетов</li>
            <li className={styles.infoItem}>Dashboard</li>
            <li className={styles.infoItem}>Месяц аmoCRM</li>
          </ul>

          <a href="#" className={styles.btn}>
            Получить консультацию
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
