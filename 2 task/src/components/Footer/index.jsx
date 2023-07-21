import styles from "./style.module.scss";
import clsx from "clsx";

import Contacts from "../Contacts";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerItem}>
            <div className={styles.title}>О компании</div>
            <ul className={styles.footerList}>
              <li className={styles.listItem}>
                <a href="#">Партнёрская программа</a>
              </li>
              <li className={styles.listItem}>
                <a href="#">Вакансии</a>
              </li>
            </ul>
          </div>

          <div className={clsx(styles.footerItem, styles.footerMenu)}>
            <div className={styles.title}>Меню</div>
            <ul className={clsx(styles.footerList, styles.footerMenuList)}>
              <li className={styles.listItem}>
                <a href="#">Расчёт стоимости</a>
              </li>
              <li className={styles.listItem}>
                <a href="#">Услуги</a>
              </li>
              <li className={styles.listItem}>
                <a href="#">Виджеты</a>
              </li>
              <li className={styles.listItem}>
                <a href="#">Интеграции</a>
              </li>
              <li className={styles.listItem}>
                <a href="#">Наши клиенты</a>
              </li>
              <li className={clsx(styles.listItem, styles.mobileListItem)}>
                <a href="#">Благодарность клиентов</a>
              </li>
              <li className={styles.listItem}>
                <a href="#">Кейсы</a>
              </li>
              <li className={clsx(styles.listItem, styles.desktopListItem)}>
                <a href="#">Благодарственные письма</a>
              </li>

              <li className={styles.listItem}>
                <a href="#">Сертификаты</a>
              </li>

              <li className={styles.listItem}>
                <a href="#">Блог на Youtube</a>
              </li>

              <li className={styles.listItem}>
                <a href="#">Вопрос / Ответ</a>
              </li>
            </ul>
          </div>

          <div className={clsx(styles.footerItem, styles.footerContacts)}>
            <div className={styles.title}>Контакты</div>
            <Contacts address={"Москва, Путевой проезд 3с1, к 902"} />
          </div>
        </div>
        <div className={styles.footerCopy}>
          <div className={styles.footerCopyText}>
            ©WELBEX 2022. Все права защищены.
          </div>
          <a className={styles.footerCopyLink} href="#">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
