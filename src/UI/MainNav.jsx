import { NavLink } from "react-router-dom";
import vsl from "../Images/VSL.png";
function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-ul">
        <NavLink to="/">
          <img src={vsl} alt="Logo" className="logo" />
        </NavLink>
        <div className="burger">
          <li className="main-nav-li">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="main-nav-li">
            <NavLink to={"about"} className="nav-link">
              About
            </NavLink>
          </li>

          <div className="dropdown">
            <li className="main-nav-li">
              Services
              <div className="dropdown-content">
                <li className="main-nav-l">
                  <NavLink
                    to={"service/hospitality-investment"}
                    className="nav-link dropdown-link">
                    Hospitality Investment
                  </NavLink>
                </li>
                <li className="main-nav-l">
                  <NavLink
                    to={"service/hospitality-solutions"}
                    className="nav-link dropdown-link">
                    Hospitality Solutions
                  </NavLink>
                </li>
                <li className="main-nav-l">
                  <NavLink
                    to={"service/hospitality-consulting"}
                    className="nav-link dropdown-link">
                    Consulting
                  </NavLink>
                </li>
              </div>
            </li>
          </div>

          <li className="main-nav-li">
            <NavLink to={"portfolio"} className="nav-link">
              Portfolio
            </NavLink>
          </li>

          <li className="main-nav-li">
            <NavLink to={"media"} className="nav-link">
              Media
            </NavLink>
          </li>

          <li className="main-nav-li">
            <NavLink to={"csr"} className="nav-link">
              CSR
            </NavLink>
          </li>

          <li className="main-nav-li">
            <NavLink to={"contact"} className="nav-link">
              Contact Us
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default MainNav;
