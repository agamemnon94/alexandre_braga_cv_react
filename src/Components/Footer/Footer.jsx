import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="section__footer">
        <div className="twitter">
          <a
            href="https://stackoverflow.com/users/19529857/agamemnon94"
            className="twitter__p"
            target="_blank"
          >
            Stack<strong>overflow</strong>{" "}
          </a>
        </div>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/braga-alexandre/"
            className="linkedin__p"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/agamemnon94"
            className="github__p"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </section>
      <p className="p__copy">
        &copy 2022, créé par Alexandre Braga, Mennecy - France
      </p>
    </footer>
  );
}
