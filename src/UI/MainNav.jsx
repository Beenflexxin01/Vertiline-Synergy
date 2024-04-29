import { Link, NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import vsl from "../Images/VSL.png";
import { useState } from "react";
function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffMenuBar = () => setIsOpen(!isOpen);

  return (
    <nav className="main-nav">
      <ul className="main-nav-ul">
        <NavLink to="/">
          <img src={vsl} alt="Logo" className="logo" />
        </NavLink>
        <div
          className={`burger ${isOpen && "open"} `}
          onClick={() => setIsOpen(!isOpen)}>
          <div className="burger_bar"></div>
          <div className="burger_bar bar"></div>
          <div className="burger_bar bar3"></div>
        </div>

        <div className={`burger-menu ${isOpen ? "open" : ""}`}>
          <li className="main-nav-li">
            <NavLink to={"/"} className="nav-link" onClick={toggleOffMenuBar}>
              Home
            </NavLink>
          </li>

          <li className="main-nav-li">
            <NavLink
              to={"about"}
              className="nav-link"
              onClick={toggleOffMenuBar}>
              About
            </NavLink>
          </li>

          <div className="dropdown">
            <li className="main-nav-li">
              Services
              <RiArrowDropDownLine size={"18px"} />
              <div className="dropdown-content">
                <li className="main-nav-l">
                  <NavLink
                    to={"service/hospitality-investment"}
                    className="nav-link     dropdown-link"
                    onClick={toggleOffMenuBar}>
                    Hospitality Investment
                  </NavLink>
                </li>
                <li className="main-nav-l">
                  <NavLink
                    to={"service/hospitality-solutions"}
                    className="nav-link     dropdown-link"
                    onClick={toggleOffMenuBar}>
                    Hospitality Solutions
                  </NavLink>
                </li>
                <li className="main-nav-l">
                  <NavLink
                    to={"service/hospitality-consulting"}
                    className="nav-link     dropdown-link"
                    onClick={toggleOffMenuBar}>
                    Consulting
                  </NavLink>
                </li>
              </div>
            </li>
          </div>

          <li className="main-nav-li">
            <NavLink
              to={"portfolio"}
              className="nav-link"
              onClick={toggleOffMenuBar}>
              Portfolio
            </NavLink>
          </li>

          <div className="dropdown">
            <li className="main-nav-li">
              Media
              <RiArrowDropDownLine size={"18px"} />
              <div className="dropdown-content">
                <li className="main-nav-l">
                  <NavLink
                    to={"media/gallery"}
                    className="nav-link dropdown-link"
                    onClick={toggleOffMenuBar}>
                    Gallery
                  </NavLink>
                </li>
                <li className="main-nav-l">
                  <NavLink
                    to={"blogs"}
                    className="nav-link dropdown-link"
                    onClick={toggleOffMenuBar}>
                    Blog
                  </NavLink>
                </li>
                <li className="main-nav-l">
                  <NavLink
                    to={"media/news"}
                    className="nav-link dropdown-link"
                    onClick={toggleOffMenuBar}>
                    News
                  </NavLink>
                </li>
              </div>
            </li>
          </div>

          <li className="main-nav-li">
            <NavLink to={"csr"} className="nav-link" onClick={toggleOffMenuBar}>
              CSR
            </NavLink>
          </li>

          <li className="main-nav-li">
            <NavLink
              to={"contact"}
              className="nav-link cta"
              onClick={toggleOffMenuBar}>
              Contact Us
            </NavLink>
          </li>
        <div className="vsts">
          <li className="main-nav-li">
            <Link
              to={"https://vsts.netlify.app/"}
              target="blank"
              className="training-link ">
              Training School
            </Link>
          </li>
        </div>
        </div>

      </ul>
    </nav>
  );
}

export default MainNav;
