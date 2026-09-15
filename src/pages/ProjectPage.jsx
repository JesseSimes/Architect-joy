import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import VisualPanel from '../components/VisualPanel';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [activeBlueprint, setActiveBlueprint] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    function updateParallax() {
      setParallaxOffset(Math.min(window.scrollY * 0.18, 160));
    }

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });

    return () => window.removeEventListener('scroll', updateParallax);
  }, [slug]);

  useEffect(() => {
    if (activeBlueprint === null && activeGallery === null) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setActiveBlueprint(null);
        setActiveGallery(null);
      }

      if (activeGallery !== null && project) {
        if (event.key === 'ArrowRight') {
          setActiveGallery((activeGallery + 1) % project.sections.length);
        }

        if (event.key === 'ArrowLeft') {
          setActiveGallery((activeGallery - 1 + project.sections.length) % project.sections.length);
        }
      }
    }

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeBlueprint, activeGallery, project]);

  if (!project) {
    return <section className="section"><h1>Project not found.</h1></section>;
  }

  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const activeSection = activeBlueprint === null ? null : project.sections[activeBlueprint];
  const activeGallerySection = activeGallery === null ? null : project.sections[activeGallery];

  function showPreviousGalleryImage() {
    setActiveGallery((activeGallery - 1 + project.sections.length) % project.sections.length);
  }

  function showNextGalleryImage() {
    setActiveGallery((activeGallery + 1) % project.sections.length);
  }

  return (
    <article
      className="project-page"
      style={{
        '--accent': project.accent,
        '--accent-2': project.accentAlt,
        '--panel-light': project.light,
        '--panel-dark': project.dark,
        '--hero-parallax': `${parallaxOffset}px`
      }}
    >
      <section className="project-hero project-hero-parallax">
        <div className="project-name-back" aria-hidden="true">{project.title}</div>
        <div className="project-building reveal">
          <VisualPanel project={project} variant="hero" label={`${project.title} building study`} />
        </div>
        <div className="project-hero-copy reveal">
          <span className="eyebrow">PROJECT {project.number}</span>
          <h1>{project.title}</h1>
          <p>{project.type}</p>
        </div>
      </section>

      <section className="project-detail-layout section">
        <div className="project-detail-image reveal">
          <VisualPanel project={project} variant="detail" label={`${project.title} elevation`} />
        </div>
        <div className="project-detail-copy reveal">
          <span className="eyebrow">Overview</span>
          <h2>{project.description}</h2>
          <div className="project-detail-meta">
            <div><span>LOCATION</span><strong>{project.location}</strong></div>
            <div><span>YEAR</span><strong>{project.year}</strong></div>
            <div><span>TYPE</span><strong>{project.type}</strong></div>
            <div><span>AREA</span><strong>{project.area}</strong></div>
          </div>
        </div>
      </section>

      <section className="section blueprint-section">
        <div className="blueprint-heading reveal">
          <span className="eyebrow">Blueprints</span>
          <h2>Drawings, plans and spatial studies.</h2>
        </div>
        <div className="blueprint-grid">
          {project.sections.map((section, index) => (
            <button
              className="blueprint-card reveal"
              key={section.heading}
              type="button"
              onClick={() => setActiveBlueprint(index)}
            >
              <BlueprintDrawing index={index} />
              <span>{section.heading}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section project-story narrow">
        {project.sections.map((section) => (
          <div className="project-story-row reveal" key={section.heading}>
            <span className="eyebrow">{section.heading}</span>
            <p>{section.body}</p>
          </div>
        ))}
      </section>

      <section className="project-final-gallery">
        {project.sections.map((section, index) => (
          <button
            className={`gallery-image gallery-image-button ${index === 1 ? 'gallery-image-small' : ''} reveal`}
            key={section.heading}
            type="button"
            onClick={() => setActiveGallery(index)}
          >
            <VisualPanel
              project={project}
              variant={index === 1 ? 'detail' : 'gallery'}
              label={`${project.title} / ${section.heading}`}
            />
          </button>
        ))}
      </section>

      <section className="section project-navigation">
        <Link className="project-nav-link project-nav-link-previous" to={`/projects/${previousProject.slug}`}>
          <span className="next-label">Previous Project</span>
          <span className="next-title">← {previousProject.title}</span>
        </Link>
        <Link className="project-nav-link project-nav-link-next" to={`/projects/${nextProject.slug}`}>
          <span className="next-label">Next Project</span>
          <span className="next-title">{nextProject.title} ↗</span>
        </Link>
      </section>

      {activeSection && (
        <div className="blueprint-modal" role="dialog" aria-modal="true" aria-label={`${activeSection.heading} blueprint`}>
          <button className="blueprint-modal-backdrop" type="button" aria-label="Close gallery" onClick={() => setActiveBlueprint(null)} />
          <div className="blueprint-modal-panel">
            <div className="blueprint-modal-header">
              <div>
                <span className="eyebrow">{project.title}</span>
                <h2>{activeSection.heading}</h2>
              </div>
              <button className="blueprint-close" type="button" onClick={() => setActiveBlueprint(null)}>Close</button>
            </div>
            <div className="blueprint-modal-body">
              <BlueprintDrawing index={activeBlueprint} enlarged />
              <p>{activeSection.body}</p>
            </div>
            <div className="blueprint-modal-actions">
              {project.sections.map((section, index) => (
                <button
                  className={index === activeBlueprint ? 'active' : ''}
                  key={section.heading}
                  type="button"
                  onClick={() => setActiveBlueprint(index)}
                >
                  {section.heading}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeGallerySection && (
        <div className="gallery-modal" role="dialog" aria-modal="true" aria-label={`${activeGallerySection.heading} gallery image`}>
          <button className="gallery-modal-backdrop" type="button" aria-label="Close gallery" onClick={() => setActiveGallery(null)} />
          <div className="gallery-modal-panel">
            <div className="gallery-modal-header">
              <div>
                <span className="eyebrow">{project.title}</span>
                <h2>{activeGallerySection.heading}</h2>
              </div>
              <button className="gallery-close" type="button" onClick={() => setActiveGallery(null)}>Close</button>
            </div>
            <div className="gallery-modal-stage">
              <button className="gallery-arrow gallery-arrow-previous" type="button" aria-label="Previous gallery image" onClick={showPreviousGalleryImage}>←</button>
              <div className="gallery-modal-image">
                <VisualPanel
                  project={project}
                  variant={activeGallery === 1 ? 'detail' : 'gallery'}
                  label={`${project.title} / ${activeGallerySection.heading}`}
                />
              </div>
              <button className="gallery-arrow gallery-arrow-next" type="button" aria-label="Next gallery image" onClick={showNextGalleryImage}>→</button>
            </div>
            <div className="gallery-modal-footer">
              <p>{activeGallerySection.body}</p>
              <span>{String(activeGallery + 1).padStart(2, '0')} / {String(project.sections.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function BlueprintDrawing({ index, enlarged = false }) {
  return (
    <div className={`blueprint-drawing blueprint-drawing-${index} ${enlarged ? 'blueprint-drawing-enlarged' : ''}`}>
      <div className="blueprint-paper-grid" />
      <div className="plan-outline">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="plan-lines">
        <span />
        <span />
        <span />
      </div>
      <div className="plan-marker plan-marker-a" />
      <div className="plan-marker plan-marker-b" />
    </div>
  );
}
