import { Link } from 'react-router-dom';
import VisualPanel from './VisualPanel';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <VisualPanel
          variant="hero"
          label="Studio spatial study"
          className="hero-visual"
        />
      </div>
      <div className="hero-copy reveal">
        <p className="eyebrow">JOY SIMES / ARCHITECT</p>
        <h1>Quiet architecture with a strong sense of place.</h1>
        <div className="hero-footer">
          <p>Residential, commercial and interior environments shaped through proportion, material and long-term use.</p>
          <Link className="text-link" to="/#projects">View selected work <span>↗</span></Link>
        </div>
      </div>
    </section>
  );
}
