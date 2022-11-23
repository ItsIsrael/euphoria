import React, { useState, Suspense } from "react";
import styled from "styled-components";
import { HiArrowSmRight } from "react-icons/hi";
import { AiOutlineWechat } from "react-icons/ai";
import { IconContext } from "react-icons";
import { BsFillXCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import blog from "../../images/plantillas/blog.jpg";
import negocios from "../../images/plantillas/negocios.jpg";
import tienda from "../../images/plantillas/tienda.jpg";
import diseño from "../../images/plantillas/diseño.jpg";
import portafolio from "../../images/plantillas/portafolio.jpg";
import landing from "../../images/plantillas/landing.jpg";
import ChatbotComponent from "../../Chatbot/chatbot";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../Model/Model";
import RedesSociales from "../../layouts/Redes";
const Home = () => {
  const plantillas = [
    {
      title: "Blog",
      image: blog,
    },
    {
      title: "Negocios",
      image: negocios,
    },
    {
      title: "Tienda Online",
      image: tienda,
    },
    {
      title: "Diseño",
      image: diseño,
    },
    {
      title: "Portafolios y CV",
      image: portafolio,
    },
    {
      title: "Landing Page",
      image: landing,
    },
  ];

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <ContainerAll>
      <Wrapper>
        {/* <Canvas
          camera={{ position: [2, 0, 12.25], fov: 12 }}
          style={{
            backgroundColor: "#0e1129",
            position: "absolute",
            left: "450px",
            width: "70%",
            height: "90vh",
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 3]} />
          </Suspense>
        </Canvas> */}
        <IconContext.Provider
          value={{
            className: "chat-class",
          }}
        >
          <button onClick={handleClick}>
          { !open ? <AiOutlineWechat /> : <BsFillXCircleFill /> }
            <span className={`${!open ? "notification" : ""}`}></span>
          </button>
          {open && (
            <div className="chat-component">
              <ChatbotComponent />
            </div>
          )}
        </IconContext.Provider>
        <Content>
          <h1>Crea tu página web profesional</h1>
          <p>Diseña tu propia página web atraves de un profesional.</p>
          <Link className="button" to="/contacto">
            Contacta un profesional
            <HiArrowSmRight />
          </Link>
        </Content>
      </Wrapper>
      <Page1>
        <div className="description">
          <h1>La libetad de crear la página web que deseas</h1>
        </div>
        <div className="description min">
          <p>
            Diseña y crea tu propia página web con calidad profesional. Ya sea
            que estés promocionando tu negocio, mostrando tu trabajo, abriendo
            tu tienda online o comenzando un blog
          </p>
        </div>
      </Page1>
      <Page2>
        <h1>Plantillas web diseñadas profesionalmente</h1>
        <div className="container">
          {plantillas.map(({ image, title }) => {
            return (
              <div className="items" key={title}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
              </div>
            );
          })}
        </div>
        <Link className="button btn btn-primary" to="/plantillas">
          Todas las plantillas.
          <HiArrowSmRight />
        </Link>
      </Page2>
      <Page3></Page3>
      <RedesSociales />
    </ContainerAll>
  );
};

export default Home;
const ContainerAll = styled.main`
  position: relative;
  .chat-class {
    color: white;
    background-color: transparent;
    size: 2em;
    width: 80px;
    height: 80px;
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 10px;
    z-index: 120;
    &:hover {
      color: #818181;
    }
  }
  .chat-component {
    position: fixed;
    top: 180px;
    right: 0;
    animation-name: showChat;
    animation-duration: 120ms;
    background-color: transparent;

    @keyframes showChat {
      0% {
        right: -100px;
        bottom: -100px;
      }
      100% {
        right: 0;
        bottom: 0;
      }
    }
  }

  .notification {
    width: 10px;
    height: 10px;
    margin: 10px;
    background-color: #ecc104;
    border-radius: 50%;
    size: 2em;
    position: fixed;
    top: 690px;
    right: 0;
    @media (max-width: 600px) {
      top: 680px;
    }
  }
`;

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 116vh;
  width: 100%;
  background-color: #0e1129;
  overflow: hidden;
  // media para la pantalla inicial del Spline
  // Colocar las demas media querys para cada dispositivo
  @media (max-width: 800px) {
    height: 100vh;
  }
  @media (min-width: 600px) {
    height: 100vh;
  }
  @media (min-width: 400px) {
    height: 100vh;
  }
  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    width: 1200px;
    height: 1000px;
    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  padding-bottom: 100px;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-weight: bold;
    font-family: "Spline Sans Mono", monospace;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    z-index: 20;
    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  .button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Page1 = styled.div`
  background-color: #0e1129;
  color: white;
  display: flex;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 300px;
  gap: 20px;
  .description {
    width: 50%;
    min-width: 400px;
  }
  .min {
    width: 200px;
  }
`;

const Page2 = styled.main`
  background-color: #0e1129;
  color: white;
  text-align: center;
  h1 {
    padding: 20px;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 11px 10px;
    justify-content: center;
    .items {
      max-width: 1200px;
      gap: 1rem;
    }
  }
  img {
    max-width: 300px;
    max-height: 300px;
  }

  .button {
    align-items: center;
  }

  @media (min-width: 600px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 900px) {
    .container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const Page3 = styled.div`
  background-color: #0e1129;
  color: white;
  display: flex;
`;

