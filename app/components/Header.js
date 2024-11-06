import Link from "next/link";
import Logo from "../images/logo.png";
import { useTheme } from "../context/ThemeContext";

// see https://stackoverflow.com/questions/59546370/i-cant-reference-an-image-in-next-js
// for how to reference an image

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header id="header">
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul id="top-buttons">
                <li key="1">
                  <a href="/">
                    <i className="fa fa-sign-in"></i> Login
                  </a>
                </li>
                <li key="2">
                  <a href="/">
                    <i className="fa fa-pencil-square-o"></i> Register
                  </a>
                </li>
                <li className="divider" key="3"></li>
                <li key="4">
                  <div className="language-switcher">
                    <span>
                      <i className="fa fa-globe"></i> English
                    </span>
                    <ul>
                      <li key="1">
                        <a href="/">Deutsch</a>
                      </li>
                      <li key="2">
                        <a href="/">Espa&ntilde;ol</a>
                      </li>
                      <li key="3">
                        <a href="/">Fran&ccedil;ais</a>
                      </li>
                      <li key="4">
                        <a href="/">Portugu&ecirc;s</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Link href="/" className="nav-logo">
                <img src={Logo.src} alt="One Ring Rentals" />
              </Link>
              <nav className="navbar">
                <button id="nav-mobile-btn">
                  <i className="fa fa-bars"></i>
                </button>
                <ul className="nav navbar-nav">
                  {/* <li key="1">
                    <a href="/">Find a Rental</a>
                  </li>
                  <li key="2">
                    <a href="/">List your rental</a>
                  </li>
                  <li key="3">
                    <a href="/">Travel Guides</a>
                  </li> */}
                  <li key="4">
                    <Link href="/regions">Regions</Link>
                  </li>
                  <li key="5">
                    <Link href="/news">News</Link>
                  </li>
                  <li key="6">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="#" onClick={toggleTheme}>
                      Toggle Theme
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
