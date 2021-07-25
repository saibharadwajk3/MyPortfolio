import styles from "../styles/Navbar.module.css";
import { icons } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#about">
          <img src="./logo.jpg" alt="icon of bharadwaj" />
        </a>
      </div>

      <nav>
        <ul className={styles.nav_links}>
          <li>
            <a href="#projects">
              <FontAwesomeIcon
                icon={icons.faCode}
                className={styles.FontAwesomeIcon}
              />
              <span>projects</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <FontAwesomeIcon
                icon={icons.faCodiepie}
                className={styles.FontAwesomeIcon}
              />
              <span>skills</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FontAwesomeIcon
                icon={icons.faEnvelope}
                className={styles.FontAwesomeIcon}
              />
              <span>contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
