import styles from "../styles/Footer.module.css";
import { icons } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.email}>
          <a href="mailto:saibharadwaj.k3@gmail.com">
            <FontAwesomeIcon
              icon={icons.faEnvelope}
              className={styles.FontAwesomeIcon}
            />
            <span> Email</span>
          </a>
        </div>
        <div className={styles.copRight}>&copy; 2021 SaiBharadwaj</div>
        <div className={styles.resume}>
          <a href="./resume.pdf" color="transparent" target="_blank" download>
            <FontAwesomeIcon
              icon={icons.faDownload}
              className={styles.FontAwesomeIcon}
            />
            <span> Resume</span>
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
