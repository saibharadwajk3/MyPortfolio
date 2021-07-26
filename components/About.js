import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import { icons } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.about}>
          <motion.div
            className={styles.title}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, ease: "easeInOut" }}
          >
            <h3>
              Hey there, I'm <br />
              <span>Sai Bharadwaj</span>
              <br />
              Student & web developer
            </h3>
          </motion.div>

          <div className={styles.icons}>
            <motion.a
              href="https://github.com/saibharadwajk3"
              rel="noreferrer"
              target="_blank"
              className={styles.btn}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: "spring", bounce: 0.3 }}
            >
              <FontAwesomeIcon
                icon={icons.faGithub}
                className={styles.FontAwesomeIcon}
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/saibharadwajk3/"
              rel="noreferrer"
              target="_blank"
              className={styles.btn}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2, type: "spring", bounce: 0.3 }}
            >
              <FontAwesomeIcon
                icon={icons.faLinkedin}
                className={styles.FontAwesomeIcon}
              />
            </motion.a>
            <motion.a
              href="https://twitter.com/saibharadwajk3"
              rel="noreferrer"
              target="_blank"
              className={styles.btn}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, type: "spring", bounce: 0.3 }}
            >
              <FontAwesomeIcon
                icon={icons.faTwitter}
                className={styles.FontAwesomeIcon}
              />
            </motion.a>
          </div>
        </div>
        <div className={styles.profile}>
          <motion.img
            className={styles.profile}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ ease: "easeIn" }}
            whileHover={{ scale: 1.05 }}
            src="./logo.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
