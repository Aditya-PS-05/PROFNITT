import { Link } from "react-router-dom";
import ConsultancyPOP from "./ConsultancyPOP";

const Navbar = () => {

  return (
    <nav
      style={{
        display: "flex",
        position: "fixed",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        height: "100px",
        fontFamily: "DMSans, sans-serif",
        // border: "2px solid red",
        backgroundColor: "#080b2d",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        zIndex: 9999,
      }}
    >
      <div className="flex-1 flex items-center justify-evenly h-full">
        <div className="w-[150px] ml-10">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="logo"
            style={{ border: "none" }}
          />
        </div>

        <div
          className="flex-1 md:flex items-center justify-evenly h-full hidden"
          style={{
            fontFamily: "Poppins, sans-serif",
            marginTop: "10px",
            marginLeft: "0px",
          }}
        >
          <div className="nav-item">HOME</div>
          <div className="nav-item">
            <Link to="/events">EVENTS</Link>
          </div>
          <div className="nav-item">PROJECTS</div>
          <div className="cursor-pointer">
            <Link to="/members">MEMBERS</Link>
          </div>
          <div className="nav-item">BLOGS</div>
          <div className="nav-item">
            <a
              href="https://medium.com/@profnitt.club"
              target="blank_"
              style={{ textDecoration: "none", color: "white" }}
            >
              ARTICLES
            </a>
          </div>
          <ConsultancyPOP />
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
