import styles from "../styles/Skills.module.css";
import React from "react";
import { skills } from "../data";
const [frontend, backend] = skills;
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const LeftAnimation = useAnimation();
  const RightAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      LeftAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      RightAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      LeftAnimation.start({ x: "-5vw", opacity: 0 });
      RightAnimation.start({ x: "5vw", opacity: 0 });
    }
  }, [inView]);
  return (
    <section id="skills">
      <div className={styles.container}>
        {/* description */}
        <div className={styles.description}>
          <h1>Skills &amp; Technologies</h1>
        </div>

        {/* skills */}
        <div ref={ref} className={styles.skills}>
          {/* frontend */}
          <motion.div className={styles.contain} animate={LeftAnimation}>
            <h2 className={styles.stack}>{frontend.stack}</h2>
            <div className={styles.frontend}>
              {frontend.skills.map((skill) => (
                <div key={skill} className={styles.skill}>
                  <div className={styles.logo}>
                    <img src={skill.image} alt="" />
                  </div>
                  <h4>{skill.tech}</h4>
                </div>
              ))}
            </div>
          </motion.div>

          {/* backend */}
          <motion.div className={styles.contain} animate={RightAnimation}>
            <h2 className={styles.stack}>{backend.stack}</h2>
            <div className={styles.backend}>
              {backend.skills.map((skill) => (
                <div key={skill} className={styles.skill}>
                  <div className={styles.logo}>
                    <img src={skill.image} alt="" />
                  </div>
                  <h4>{skill.tech}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
