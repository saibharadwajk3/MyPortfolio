import styles from "../styles/Navbar.module.css";

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
              <i class="fas fa-code"></i>
              <span>projects</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <i class="fab fa-codiepie"></i>
              <span>skills</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <i class="fas fa-envelope"></i>
              <span>contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
