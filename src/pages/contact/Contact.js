import React from "react";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="background-image" />
      <div className="ava">
        <img src="author.png" alt="author" />
      </div>
      <div className="intro">
        <h2>Pham Tin</h2>
        <span>Front-End Developer</span>
        <br />
        <a href="https://www.facebook.com/tin.pham.3994">
          <i className="fab fa-facebook-square" />
        </a>
        <a href="https://github.com/phamtin/">
          <i className="fab fa-github-square" />
        </a>

        <p>
          <strong>Tin</strong> is the instructor of the highest rated Web
          Development course on Udemy as well as one of the fastest growing. His
          graduates have moved on to work for some of the biggest tech companies
          around the world like Apple, Google, Amazon, JP Morgan, IBM, UNIQLO
          etc... He has been working as a senior software developer in Silicon
          Valley and Toronto for many years.
        </p>
      </div>
    </div>
  );
};

export default Contact;
