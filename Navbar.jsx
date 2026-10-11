import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand text-light" to="/">
          DevFolio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                SERVICES
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                WORK
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                BLOG
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                CONTACT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/daily-inspiration"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                DAILY INSPIRATION
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
