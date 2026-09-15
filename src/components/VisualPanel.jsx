export default function VisualPanel({ project, variant = 'wide', label, className = '' }) {
  const panelLabel = label || project?.title || 'Architectural study';
  const style = project
    ? {
        '--accent': project.accent,
        '--accent-2': project.accentAlt,
        '--panel-light': project.light,
        '--panel-dark': project.dark
      }
    : undefined;

  return (
    <div className={`visual-panel visual-panel-${variant} ${className}`} style={style} aria-label={panelLabel}>
      <div className="visual-sun" />
      <div className="visual-grid-lines" />
      <div className="visual-plane visual-plane-a" />
      <div className="visual-plane visual-plane-b" />
      <div className="visual-plane visual-plane-c" />
      <div className="visual-frame-line visual-frame-line-a" />
      <div className="visual-frame-line visual-frame-line-b" />
      <div className="visual-caption">
        <span>{panelLabel}</span>
      </div>
    </div>
  );
}
