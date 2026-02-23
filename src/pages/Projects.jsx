import styles from './Projects.module.css';
import { Link } from "react-router-dom";
import projectData from "../utils/projectData.json";

const renderTopTile = (project) => (
  <Link to={`/projects/${project.id}`} className={styles.projectTileLink} key={project.id}>
    <div className={`${styles.projectTile} ${styles.topdetails}`}>
      <img src={project.imgSrc} alt={project.name} className={styles.projectImg} />
      <p className={styles.projectName}>{project.name}</p>
      <p className={styles.projectCategory}>{project.category}</p>
    </div>
  </Link>
);

const Projects = () => {
  const webDevProjects = projectData.webDev.slice(0, 4).map((project, index) => ({ ...project, id: `webDev-${index}` }));
  const aiMlProjects = projectData.aiMl.slice(0, 3).map((project, index) => ({ ...project, id: `aiMl-${index}` }));
  const appProjects = projectData.app.slice(0, 2).map((project, index) => ({ ...project, id: `app-${index}` }));

  return (
    <div className={styles.projects_section}>
      <p className={styles.title}>Featured Projects</p>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>Web Development Projects</p>
        <div className={styles.projectGrid}>
          {webDevProjects.map((project) => renderTopTile(project))}
        </div>
      </div>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>AI/ML Projects</p>
        <div className={styles.projectGrid}>
          {aiMlProjects.map((project) => renderTopTile(project))}
        </div>
      </div>

      <div className={styles.projectCategorySection}>
        <p className={styles.categoryTitle}>App Development Projects</p>
        <div className={styles.projectGrid}>
          {appProjects.map((project) => renderTopTile(project))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
