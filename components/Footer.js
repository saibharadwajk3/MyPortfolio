import styles from "../styles/Footer.module.css";
import { icons } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.4,
        },
      });
    }

    if (!inView) {
      animation.start({ opacity: 0, scale: 0 });
    }
  }, [inView, animation]);
  return (
    <div ref={ref} className={styles.container}>
      <footer className={styles.footer}>
        <motion.div className={styles.email} animate={animation}>
          <a href="mailto:saibharadwaj.k3@gmail.com">
            <FontAwesomeIcon
              icon={icons.faEnvelope}
              className={styles.FontAwesomeIcon}
            />
            <span> Email</span>
          </a>
        </motion.div>
        <motion.div className={styles.copRight} animate={animation}>
          &copy; 2022 SaiBharadwaj
        </motion.div>
        <motion.div className={styles.resume} animate={animation}>
          <a href="./resume.pdf" color="transparent" target="_blank" download>
            <FontAwesomeIcon
              icon={icons.faDownload}
              className={styles.FontAwesomeIcon}
            />
            <span> Resume</span>
          </a>
        </motion.div>
      </footer>
    </div>
  );
};
export default Footer;
