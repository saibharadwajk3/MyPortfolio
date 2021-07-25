import styles from "../styles/About.module.css";
import { icons } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.title}>
            <h3>
              Hey there, I'm <br />
              <span>Sai Bharadwaj</span>
              <br />
              Student & web developer
            </h3>
          </div>

          <div className={styles.icons}>
            <a
              href="https://github.com/saibharadwajk3"
              target="_blank"
              className={styles.btn}
            >
              <FontAwesomeIcon
                icon={icons.faGithub}
                className={styles.FontAwesomeIcon}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/saibharadwajk3/"
              target="_blank"
              className={styles.btn}
            >
              <FontAwesomeIcon
                icon={icons.faLinkedin}
                className={styles.FontAwesomeIcon}
              />
            </a>
            <a
              href="https://twitter.com/saibharadwajk3"
              target="_blank"
              className={styles.btn}
            >
              <FontAwesomeIcon
                icon={icons.faTwitter}
                className={styles.FontAwesomeIcon}
              />
            </a>
          </div>
        </div>
        <div className={styles.profile}>
          <img src="./logo.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
