import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="credits">
        This project was coded by
          {" "}
          Maria Mertiri
        </a>
        <br />
        Open-sourced on
        <a
          className="credits-ref"
          href="https://github.com/mariamer-hub/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        and hosted on
        <a
          className="credits-ref"
          href="https://weather-mariamer-react.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
