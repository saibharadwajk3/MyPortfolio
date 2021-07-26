import styles from "../styles/Navbar.module.css";
import { icons } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Navbar = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 3.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#about">
          <img src="./logo.jpg" alt="icon of bharadwaj" />
        </a>
      </div>

      <nav>
        <motion.ul
          className={styles.nav_links}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={item}>
            <a href="#projects">
              <FontAwesomeIcon
                icon={icons.faCode}
                className={styles.FontAwesomeIcon}
              />
              <span>projects</span>
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="#skills">
              <FontAwesomeIcon
                icon={icons.faCodiepie}
                className={styles.FontAwesomeIcon}
              />
              <span>skills</span>
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="#contact">
              <FontAwesomeIcon
                icon={icons.faEnvelope}
                className={styles.FontAwesomeIcon}
              />
              <span>contact</span>
            </a>
          </motion.li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Navbar;
