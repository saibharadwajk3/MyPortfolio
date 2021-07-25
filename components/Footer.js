import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.email}>
          <a href="mailto:saibharadwaj.k3@gmail.com">
            <i className="fas fa-envelope"></i>Email
          </a>
        </div>
        <div className={styles.copRight}>&copy; 2021 SaiBharadwaj</div>
        <div className={styles.resume}>
          <a href="./resume.pdf" color="transparent" target="_blank" download>
            <i className="fas fa-download"></i>Resume
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
