import styles from "../styles/Skills.module.css";
import React from "react";
import { skills } from "../data";
const [frontend, backend] = skills;

const Skills = () => {
  return (
    <section id="skills">
      <div className={styles.container}>
        {/* description */}
        <div className={styles.description}>
          <h1>Skills &amp; Technologies</h1>
        </div>

        {/* skills */}
        <div className={styles.skills}>
          {/* frontend */}
          <div className={styles.contain}>
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
          </div>

          {/* backend */}
          <div className={styles.contain}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
