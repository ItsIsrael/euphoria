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
      <h2>Nuestras redes sociales</h2>
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
padding: 20px;
text-align: center;
gap: 20px;
  background-color: #0e1129;
  h1 {
    color: aliceblue;
  }
  .container-redes {
    width: 25px;
    height:25px;
    color: #ffffff;
    .item-redes {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-content: center;
      border-radius: 50%;
      gap: 200px;
      padding: 50px;
      position: absolute;
      left: 200px;
      .item {
      }
    }
  }
`;
