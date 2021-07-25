import styles from "../styles/About.module.css";

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
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/saibharadwajk3/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/saibharadwajk3"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
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
