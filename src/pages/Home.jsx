import Hero from '../components/Hero';
import ImageMarquee from '../components/ImageMarquee';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <>
      <Hero />
      <ImageMarquee />

      <section className="section about" id="about">
        <SectionHeading eyebrow="01 / About" title="Architecture built around people, place and permanence." />
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
        <SectionHeading eyebrow="02 / Services" title="Design services shaped to the project, not a template." />
        <div className="service-list">
          {[
            ['01', 'Architectural Design', 'Concepts, planning, design development and built-environment thinking.'],
            ['02', 'Interior Design', 'Material, lighting, proportion and detail for considered interior environments.'],
            ['03', 'Residential Design', 'Homes shaped around context, lifestyle and long-term use.'],
            ['04', 'Commercial Design', 'Workplaces, hospitality and commercial spaces balancing identity and function.'],
            ['05', 'Renovation & Adaptive Reuse', 'Reworking existing spaces with care for character, performance and use.']
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
