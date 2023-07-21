import logo from "../../assets/images/logo.png";
import styles from "./style.module.scss";

import Navbar from "../Navbar";
import Contacts from "../Contacts";

const Header = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <a className={styles.logoLink} href="index.html">
          <img src={logo} alt="Welbex logo" />
          <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
        </a>
        <Navbar />
        <Contacts />
      </header>
    </div>
  );
};

export default Header;
