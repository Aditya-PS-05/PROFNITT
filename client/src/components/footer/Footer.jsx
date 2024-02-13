import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div className="w-screen flex justify-center items-center mt-10 border-2 border-red-500">
      <div className="w-[100%] bg-[#010D50] md:px-16 md:py-7">
        <div className="md:flex justify-center items-center w-full border-yellow-400 border-2">
          <div className="sm:w-[60%] md:w-[40%] flex justify-center items-center flex-col border-green-400 border-2 md:m-0 m-auto">
            <div style={{ display: "flex", alignItems: "center" }} className="border-2 border-green-500">
              <img
                src="/images/logo.png"
                alt="ProfNITT Logo"
                className="w-[90px]"
                style={{ marginTop: "-20px", marginRight: "15px" }}
              />
              <div className="border-2 border-red-500">
                <br />
                <h1
                  className="text-[1vmax] font-DMSans font-bold"
                  style={{
                    padding: 0,
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  The Finance and
                </h1>
                <h1
                  className="text-[1vmax] font-DMSans font-bold"
                  style={{
                    padding: 0,
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Investment Club
                </h1>
              </div>
            </div>
            <div
              className="font-ppSupplyMono"
              style={{
                color: "#57E2E5",
                padding: 0,
                fontSize: "20px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Follow Us
            </div>
            <div className="flex gap-4 mt-3">
              <div>
                <a
                  href="https://github.com/profnitt-club"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/profnitt/"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/profnitt?igsh=bTd0ZW1oMGQyeHA3"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/profnitt?mibextid=ZbWKwL"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </div>
              <div>
                <a
                  href="https://x.com/profnitt?t=qddKAMdy2WCt18bAuiMT3g&s=09"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[50%] border-red-400 border-2 flex justify-center items-center md:m-0 m-auto mt-4">
            <div
              className="border-red-400 border-2"
            >
              <h1
                style={{
                  padding: 0,
                  fontSize: "35px",
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {" "}
                <b>Contact Information</b>
              </h1>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  margin: "5px 0",
                }}
              >
                {" "}
                {/* Adjusted margin */}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="1x"
                  style={{ color: "white", marginRight: "5px" }}
                />
                <span
                  style={{
                    marginLeft: "5px",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  NIT Trichy{" "}
                </span>
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  margin: "5px 0",
                }}
              >
                {" "}
                {/* Adjusted margin */}
                <FontAwesomeIcon
                  icon={faPhone}
                  size="1x"
                  style={{ color: "white", marginRight: "5px" }}
                />
                <span
                  style={{
                    marginLeft: "5px",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  +91 8220533117{" "}
                </span>
              </p>
              <p
                style={{
                  display: "flex",
                  color: "white",
                  alignItems: "center",
                  margin: "5px 0",
                }}
              >
                {" "}
                {/* Adjusted margin */}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="1x"
                  style={{ color: "white", marginRight: "5px" }}
                />
                <span
                  style={{
                    marginLeft: "5px",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  profnitt.club@gmail.com{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <br
          style={{
            borderTop: "2px solid #000",
            margin: "20px 0",
            display: "block",
          }}
        />
        <hr />
        <div className="text-center mt-6">
          <h1
            className="font-DMSans"
            style={{
              color: "#57E2E5",
              padding: 0,
              fontSize: "20px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Designed and Deployed by
            <a
              href="https://www.linkedin.com/in/riya-gupta-rg3010"
              style={{ textDecoration: "none", color: "#57E2E5" }}
            >
              {" "}
              Riya &
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-pratap-singh-952a8820a/"
              style={{ textDecoration: "none", color: "#57E2E5" }}
            >
              {" "}
              Aditya
            </a>
          </h1>

        </div>
      </div>
    </div>
  );
};

export default Footer;
