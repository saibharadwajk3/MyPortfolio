import styles from "../styles/Projects.module.css";
import { projects } from "../data";
import { icons } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Projects = () => {
  return (
    <section id="projects">
      <div className={styles.container}>
        <div className={styles.description}>
          <h1>Apps I've Built</h1>
        </div>
        <div className={styles.projects}>
          {projects.map((project) => (
            <div className={styles.project} key={project.id}>
              <img alt="gallery" src={project.image} />
              <div className={styles.details}>
                <h2>{project.subtitle}</h2>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className={styles.links}>
                  <a href="#">
                    {" "}
                    <FontAwesomeIcon
                      icon={icons.faGithub}
                      className={styles.FontAwesomeIcon}
                    />
                    <span>Source</span>
                  </a>
                  <a href="#">
                    {" "}
                    <FontAwesomeIcon
                      icon={icons.faGlobe}
                      className={styles.FontAwesomeIcon}
                    />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
