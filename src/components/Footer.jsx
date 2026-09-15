import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>JOY SIMES</strong>
        <span>ARCHITECT</span>
      </div>
      <div className="footer-meta">
        <span>Architecture / Interiors / Spatial Design</span>
        <a href="mailto:studio@joysimes.com">studio@joysimes.com</a>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Joy Simes</div>
    </footer>
  );
}
