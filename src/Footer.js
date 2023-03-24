import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="credits">
        Coded by{" "}
        <a
          className="credits-ref"
          href="https://www.linkedin.com/in/maria-m-8b774a106/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {""} Maria Mertiri {""}
        </a>
        <br />
        Open-sourced on
        <a
          className="credits-ref"
          href="https://github.com/mariamer-hub/weatherapp-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {""} GitHub {""}
        </a>
        and hosted on
        <a
          className="credits-ref"
          href="https://reactweather-mariamer.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {""} Netlify
        </a>
      </footer>
    </div>
  );
}
