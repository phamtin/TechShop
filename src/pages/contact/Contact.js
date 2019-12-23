import React from "react";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="background-image" />
      <div className="ava">
        <img src="author.png" alt="author" />
      </div>
      <div className="content">
        <div className="intro">
          <h2>Pham Tin</h2>
          <span>Front-End Developer</span>
          <a href="https://www.facebook.com/tin.pham.3994">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="https://github.com/phamtin/">
            <i className="fab fa-github-square" />
          </a>
          <p className="description">
            <strong>Tin</strong> has passion on Front-End speciality, he is
            atractived by stunning, modern-look website with the newest
            technology behind. He is intersection of designer and developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
