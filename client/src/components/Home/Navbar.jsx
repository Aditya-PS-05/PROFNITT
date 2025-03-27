import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import './Navbar.css';

const Navbar = () => {

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        height: "100px",
        fontFamily: "DMSans, sans-serif",
        backgroundColor: "#080b2d",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        zIndex: 9999,
      }}
    >
      <div className="flex-1 flex items-center justify-evenly h-full">

        <div className="w-[150px] ml-10">
        <Link to="/">
          <img
              src="/images/logo.png"
              alt="Logo"
              className="logo"
              style={{ border: "none" }}
            />
        </Link>
          
        </div>

        <div
          className="flex-1 md:flex items-center justify-evenly h-full hidden"
          style={{
            fontFamily: "Poppins, sans-serif",
            marginTop: "10px",
            marginLeft: "0px",
          }}
        >
          <div className="nav-item">
            <Link to="/events">EVENTS</Link>
          </div>
          <div className="nav-item">
          <Link to="/projects">PROJECTS</Link>
            </div>
          <div className="cursor-pointer">
            <Link to="/members">MEMBERS</Link>
          </div>
          <div className="nav-item">
            <Link to="/blogs">BLOGS</Link>
            </div>
          <div className="nav-item">
            <Link to="/gallery">GALLERY</Link>
            </div>
          <Link to="https://tools.profnitt.in ">
          <Button
            variant="primary"
            className="pop-button-animation"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "0.9rem",
              borderRadius: "35px",
              backgroundColor: "#0328EE",
              color: "white",
            }}
          >
            ProfNITT Tools
          </Button>
          </Link>
        </div>
        <div className="md:hidden relative inline-block" id="dropdown">
          <img src="/images/HamburgerMenu.svg" alt="HamburgerMenu"id="dropbtn"/>
          <div id="dropdown-content" className="hidden min-w-[120px] z-[10] bg-[#080b2d]">
            <a href="#" className="block">Link 1</a>
            <a href="#" className="block">Link 2</a>
            <a href="#" className="block">Link 3</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
