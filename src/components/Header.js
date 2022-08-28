import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header__title">
        <h2>Sandbox Test Project</h2>
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <Link to="/">
            <li className="nav__list-item">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav__list-item">About</li>
          </Link>
          <Link to="/contact-us">
            <li className="nav__list-item">Contact Us</li>
          </Link>
          <Link to="/services">
            <li className="nav__list-item">Services</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
