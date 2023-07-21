import styles from "./style.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <a href="#">Услуги</a>
        </li>
        <li>
          <a href="#">Виджеты</a>
        </li>
        <li>
          <a href="#">Интеграции</a>
        </li>
        <li>
          <a href="#">Кейсы</a>
        </li>
        <li>
          <a href="#">Сертификаты</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
