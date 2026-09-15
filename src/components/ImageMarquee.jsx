import VisualPanel from './VisualPanel';
import { projects } from '../data/projects';

export default function ImageMarquee() {
  return (
    <section className="editorial-strip" aria-label="Architecture imagery">
      <div className="editorial-track">
        {[...projects, ...projects].map((project, index) => (
          <div className="editorial-image" key={`${project.slug}-${index}`}>
            <VisualPanel project={project} variant="marquee" label={project.type} />
          </div>
        ))}
      </div>
    </section>
  );
}
