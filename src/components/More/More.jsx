import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import modelCanvas from "../../images/assets/euphoria-canvas-listo.png";
const ModeloCavas = () => {
  return (
    <ContainerCanvasModel>
      <img src={modelCanvas} alt="Modelo canvas" />
      <h1>
        Analisis de entorno: La matriz <b>DAFO</b>
      </h1>
      <main>
        <div>
          <h1>Debilidades</h1>
          <p>- Costos de mantenimiento (Hosting y licencias caras)</p>
          <p>- Falta de visibilidad (No tenemos renombre en el sector)</p>
          <p>- Capital reducido (solo somos 2 socios)</p>
          <p>- Falta de presencia en las redes sociales</p>
        </div>
        <div>
          <h1>Amenazas</h1>
          <p>- Costos de mantenimiento (Hosting y licencias caras)</p>
          <p>
            - La posibilidad de que tus competidores te copian o roban tus ideas
          </p>
          <p>- Aparición de nuevos competidores </p>
          <p>- Un cambio en las necesidades del cliente al último minuto</p>
          <p>- Ciberataques o actividad fraudulenta</p>
        </div>
        <div>
          <h1>Fortalezas</h1>
          <p>- Politica de atención al cliente</p>
          <p>- Un diseño web y sistema de gestión enfocado en el cliente</p>
          <p>- Funciones de búsqueda y navegación intuitivas</p>
          <p>- Despliegue de la aplicación en cualquier dispositivo</p>
        </div>
        <div>
          <h1>Oportunidades</h1>
          <p>- Aumentar la valoración del negocio</p>
          <p>- Nuevas tecnologías para mejorar la experiencia de usuario</p>
          <p>- Nuevas tendencias de diseño web para difundir el mensaje</p>
          <p>
            - Ingresar en mercados más alejados, con el uso de la página web
          </p>
        </div>
      </main>
    </ContainerCanvasModel>
  );
};

export default ModeloCavas;

const ContainerCanvasModel = styled.main`
  width: 100%;
  height: 100%;
  background-color: #0e1129;
  text-align: center;
  h1 {
    color: white;
    font-family: "Cinzel Decorative", cursive;
  }
  img {
    width: 100%;
    height: 100%;
  }
  main {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    color: aliceblue;
    div {
      background-color: #0e1129;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    @media (max-width:800px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
