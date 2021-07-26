import styles from "../styles/Projects.module.css";
import { projects } from "../data";
import { icons } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Projects = () => {
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
          bounce: 0.2,
        },
      });
    }

    if (!inView) {
      animation.start({ opacity: 0, scale: 0 });
    }
  }, [inView]);

  return (
    <section id="projects">
      <div className={styles.container}>
        <div className={styles.description}>
          <h1>Apps I've Built</h1>
        </div>
        <div ref={ref} className={styles.projects}>
          {projects.map((project) => (
            <motion.div
              className={styles.project}
              key={project.id}
              animate={animation}
            >
              <img alt="gallery" src={project.image} />
              <div className={styles.details}>
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>

                <p>{project.description}</p>
                <div className={styles.links}>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05, color: "orangered" }}
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={icons.faGithub}
                      className={styles.FontAwesomeIcon}
                    />
                    <span>Source</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05, color: "orangered" }}
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={icons.faGlobe}
                      className={styles.FontAwesomeIcon}
                    />
                    <span>Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
