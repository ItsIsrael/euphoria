import React from "react";
import { Location } from "../Location";
import { VscLocation } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import { VscWatch } from "react-icons/vsc";
import { VscCallIncoming } from "react-icons/vsc";

import styled from "styled-components";
const Contact = () => {
  return (
    <>
      <ContactLeft>
        <div className="content-container">
          <h2>Contacto</h2>
          <p>Nos encontramos en:</p>
          <div className="content-icons-all">
            <div className="content-icons">
              <h2>
                <VscLocation />
                Dirección
              </h2>
              <p>Zaragoza, 44 </p>
            </div>
            <div className="content-icons">
              <h2>
                <VscWatch />
                Horario
              </h2>
              <p>Lunes a viernes 10am a 7pm"</p>
            </div>

            <div className="content-icons">
              <h2>
                <VscMail />
                Correo
              </h2>
              <p>euphoria@protonmail.com</p>
            </div>

            <div className="content-icons">
              <h2>
                <VscCallIncoming />
                Telefono
              </h2>
              <p>+34 631462212</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h1>Envianos un mensaje</h1>
          <label htmlFor="">Nombre</label>
          <input type="text" className="form-control" />
          <label htmlFor="">Correo</label>
          <input type="email" className="form-control" />
          <label htmlFor="">Mensaje</label>
          <textarea className="form-control" />
          <input type="submit" className="btn btn-primary" />
        </div>
      </ContactLeft>
      <ContactRight></ContactRight>
      <Location />
    </>
  );
};

export default Contact;

const ContactLeft = styled.main`
  background-color: #0e1129;
  color: white;
  padding: 10px;
  .content-container {
    width: 100%;
    height: 100%;
    .content-icons-all {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      place-items: center;
      .content-icons {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media only screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .content-icons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 50%;
    }
  }
  .contact-form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const ContactRight = styled.main``;
