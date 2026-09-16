import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section about" id="about">
        <SectionHeading eyebrow="01 / About" title="Quiet work, carefully placed." />
        <div className="about-grid">
          <div className="experience-block reveal">
            <span className="experience-number">08+</span>
            <span className="experience-label">YEARS OF EXPERIENCE</span>
          </div>
          <div className="body-copy reveal">
            <p>Joy Simes is an architect working across residential, commercial and interior environments with a focus on calm, durable spaces.</p>
            <p>The studio approach begins with context: how light moves, how a room will be used, what should be kept, and where small decisions can make the daily experience better.</p>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <SectionHeading eyebrow="02 / Services" title="From first sketch to finished space." />
        <div className="service-list">
          {[
            ['01', 'Architecture', 'Concept, planning and spatial design for homes and small commercial environments.'],
            ['02', 'Interiors', 'Material, lighting and detail work for considered, durable rooms.'],
            ['03', 'Renovation', 'Careful adaptation of existing buildings with respect for character and use.']
          ].map(([num, title, desc]) => (
            <article className="service-row reveal" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <SectionHeading eyebrow="03 / Selected Work" title="A selection of architectural work." />
        <div className="project-list">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </section>

      <section className="section contact-preview">
        <div className="contact-preview-inner reveal">
          <span className="eyebrow">04 / Contact</span>
          <h2>Have a project in mind?</h2>
          <a className="text-link large" href="mailto:studio@joysimes.com">Start a conversation <span>↗</span></a>
        </div>
      </section>
    </>
  );
}
