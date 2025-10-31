import './MainNavBar.css';
import { Link } from 'react-router-dom';
function MainNavBar() {
  return (
    <nav className="main-navbar">
      <div className="nav-container">
        <h2 className="nav-logo">MyApp</h2>
        <div className="nav-links">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/reg" className="nav-link">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar;
