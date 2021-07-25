import styles from "../styles/Projects.module.css";
import { projects } from "../data";

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
                    <i className="fab fa-github"></i>source
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-globe"></i>Live
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
