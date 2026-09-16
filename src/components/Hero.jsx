export default function Hero() {
  return (
    <section className="hero hero-portrait-layout">
      <div className="hero-portrait" aria-label="Editorial portrait of Joy Simes">
        <div className="portrait-light" />
        <div className="portrait-figure">
          <div className="portrait-head" />
          <div className="portrait-neck" />
          <div className="portrait-jacket" />
        </div>
      </div>
      <div className="hero-name reveal">
        <span>JOY SIMES</span>
        <small>ARCHITECT</small>
      </div>
      <div className="hero-quote reveal">
        <p>“Architecture should feel inevitable: calm in its proportions, precise in its details, and deeply tuned to the life inside it.”</p>
        <a className="text-link" href="/#projects">Selected work <span>↗</span></a>
      </div>
    </section>
  );
}
