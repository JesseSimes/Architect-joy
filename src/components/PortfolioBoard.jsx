export default function PortfolioBoard({ project, layout = 0 }) {
  const style = {
    '--accent': project.accent,
    '--accent-2': project.accentAlt,
    '--panel-light': project.light,
    '--panel-dark': project.dark
  };

  return (
    <div className={`portfolio-board portfolio-board-${layout % 4}`} style={style} aria-label={`${project.title} portfolio board`}>
      <div className="board-fold" />
      <div className="board-rule board-rule-top" />
      <div className="board-rule board-rule-bottom" />
      <div className="board-kicker">{project.type}</div>
      <div className="board-title">{project.title}</div>
      <div className="board-image board-image-main" />
      <div className="board-image board-image-secondary" />
      <div className="board-image board-image-tertiary" />
      <div className="board-plan">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="board-copy">
        <span />
        <span />
        <span />
      </div>
      <div className="board-page">{project.number}</div>
    </div>
  );
}
