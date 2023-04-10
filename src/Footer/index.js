import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default class Footer extends Component {
  render() {
    return (
      <BrowserRouter>
        <footer className="footer  text-white">
          <h1>Contact:</h1>
          <ul className="flex s-center w-80 ">
            <Link
              to="mailto:mhmedemam55@gmail.com?subject=My%20email%20body"
              className="links mail"
            >
              <li>
                <AiFillMail />
              </li>
            </Link>
            <Link to="https://wa.me/+201004697925" className="links whatsapp">
              <li>
                <IoLogoWhatsapp />
              </li>
            </Link>
            <Link to="https://github.com/mhmed7474" className="links">
              <li>
                <AiFillGithub />
              </li>
            </Link>
            <Link
              to="https://www.linkedin.com/in/mohamed-emam-5080b425a"
              className="links linkedin"
            >
              <li>
                <AiFillLinkedin />
              </li>
            </Link>
          </ul>
          <p className="text-center">
            &copy; All Rights Reserved -
            <span className="myname">Mohamed Emam</span>
          </p>
        </footer>
      </BrowserRouter>
    );
  }
}
