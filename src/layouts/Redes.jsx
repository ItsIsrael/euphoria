import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaYoutube,
  FaBloggerB,
  FaTiktok,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const RedesSociales = () => {
  return (
    <Redes>
      <IconContext.Provider
        value={{
          className: "container-redes",
        }}
      >
        <div className="item-redes">
          <Link to="/" className="item">
            <FaTwitter />
          </Link>
          <Link to="/">
            <FaBloggerB />
          </Link>
          <Link to="/">
            <FaFacebookF />
          </Link>
          <Link to="/">
            <FaTelegramPlane />
          </Link>
          <Link to="/">
            <FaYoutube />
          </Link>
          <Link to="/">
            <FaTiktok />
          </Link>
          <Link to="/">
            <FaLinkedinIn />
          </Link>
          <Link to="/">
            <FaGithub />
          </Link>
        </div>
      </IconContext.Provider>
    </Redes>
  );
};

export default RedesSociales;

const Redes = styled.main`
  background-color: #0e1129;
  .container-redes {
    width: 40px;
    height: 30px;
    color: #ffffff;
    .item-redes {
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-radius: 50%;
      background-color: white;
      gap: 60px;
      width: 100%;
      padding: 20px;
      .item {
        background-color: #e6e6e6;
      }
    }
  }
`;
