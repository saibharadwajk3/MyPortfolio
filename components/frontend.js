import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const frontend = () => {
  return (
    <div ref={ref}>
      <motion.div className={styles.contain}>
        <h2 className={styles.stack}>{frontend.stack}</h2>
        <div className={styles.frontend}>
          {frontend.skills.map((skill, i) => (
            <div key={i} className={styles.skill}>
              <div className={styles.logo}>
                <img src={skill.image} alt="" />
              </div>
              <h4>{skill.tech}</h4>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default frontend;
