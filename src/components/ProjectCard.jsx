import { Link } from 'react-router-dom';
import PortfolioBoard from './PortfolioBoard';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Link className="project-card reveal" to={`/projects/${project.slug}`}>
      <div className="project-image-frame">
        <PortfolioBoard project={project} layout={index} />
      </div>
      <div className="project-card-meta">
        <div>
          <span>{project.number}</span>
          <h3>{project.title}</h3>
        </div>
        <div className="project-card-side">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}
