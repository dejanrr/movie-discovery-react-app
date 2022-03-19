import React from "react";
import "./footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main-text">
        Movie Discovery is a social media application. Here you can find new
        movie recommendations
      </div>
      <div className="footer-text">
        (This is the placeholder text for the footer, this is the placeholder
        text for the footer,)
      </div>
      <div className="footer-btn">
        <button>Sign up</button>
      </div>
      <div className="copyright-section">
        <p>© 2022 Dejan Radeljić</p>
        <p>Built with React</p>
        <p>Data provided by The Movie Database (TMDB)</p>
        <a href="https://github.com/dejanrr">
          <GitHubIcon sx={{ fontSize: "40px" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
