import { Link, useParams } from "react-router-dom";
import projectData from "../utils/projectData.json";
import styles from "./Projects.module.css";

const projects = [
  ...projectData.webDev.map((project, index) => ({ ...project, id: `webDev-${index}` })),
  ...projectData.aiMl.map((project, index) => ({ ...project, id: `aiMl-${index}` })),
  ...projectData.app.map((project, index) => ({ ...project, id: `app-${index}` })),
];

const projectLinks = {
  "webDev-0": "https://mlsc-vcet-official.web.app/",
  "webDev-2": "https://mlsccoherence.web.app/",
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className={styles.projects_section}>
        <p className={styles.title}>Project not found</p>
        <Link to="/projects">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className={styles.projects_section}>
      <p className={styles.title}>{project.name}</p>
      <div className={styles.projectGrid}>
        <div className={styles.projectTile}>
          <img src={project.imgSrc} alt={project.name} className={styles.projectImg} />
          <p className={styles.projectCategory}>{project.category}</p>
          {projectLinks[project.id] && (
            <a href={projectLinks[project.id]} target="_blank" rel="noreferrer">
              Visit website
            </a>
          )}
          <Link to="/projects">Back to projects</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
