import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="About">
      <center>
        <img src="logo192.png" align="bottom" />
      </center>
      <hr />
      <a href="http://somegreatsite.com">link name</a>
      is a link to another nifty site
      <h1>this is a header</h1>
      <h2>this is a medium header</h2>
      send me mail at
      <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.
      <p> this is a new paragraph! </p>
      <p>
        <b>this is a new paragraph!</b>
      </p>
        <b>
          <i>
            this is a new sentence without a paragraph break, in bold italics.
          </i>
        </b>
      <hr />
    </div>
  );
};

export default About;
