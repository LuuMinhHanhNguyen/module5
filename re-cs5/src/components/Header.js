import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation h-25">
              <div
                className="logo m-0 float-start border-2"
                style={{ height: "50px" }}
              >
                <img src={logo} alt="H-something" className="h-100 " />
              </div>

              <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="has-children active">
                  <a>Customers</a>
                  <ul className="dropdown">
                    <li>
                      <Link to="/customers">List Of Customers</Link>
                    </li>
                    <li>
                      <Link to="/customers/create">Create Customer</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-children active">
                  <a>Contracts</a>
                  <ul className="dropdown">
                    <li>
                      <Link to="/contracts">List Of Contracts</Link>
                    </li>
                    <li>
                      <Link to="/contracts/create">Create Contract</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-children active">
                  <a>Services</a>
                  <ul className="dropdown">
                    <li>
                      <Link to="/services">List Of Facilities</Link>
                    </li>
                    <li>
                      <Link to="/facilities/create">Create New Facility</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>

              <a
                href="#"
                className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
                data-toggle="collapse"
                data-target="#main-navbar"
              >
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="hero page-inner overlay"
        style={{
          backgroundImage: `url("./images/hero_bg_1.jpg")`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center mt-5">
              <h1 className="heading ">Hannah - the RedoC</h1>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-center justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="index.html">Our Servies</a>
                  </li>
                  <li
                    className="breadcrumb-item active text-white-50"
                    aria-current="page"
                  >
                    State Of The Art
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
