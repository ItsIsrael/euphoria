import React from "react";
import styled from "styled-components";
import RedesSociales from "../../layouts/Redes";

const FooterEuphoria = () => {
  return (
    <Footer>
      <RedesSociales />
      <p>
        Euphoria.onrender.com es una plataforma líder en desarrollo web, basada en el sistema
        "en la nube", que tiene millones de usuarios alrededor del mundo. <br></br> Ahora
        es más fácil tener una presencia online profesional.
      </p> 
      <p>© 2022 EUPHORIA S.L. All rights reserved</p>
    </Footer>
  );
};

export default FooterEuphoria;

const Footer = styled.footer`
  text-align: center;
  background-color: #0e1129;
  color: white;
  padding: 40px;
  span{
    min-width:300px ;
  }
`;
