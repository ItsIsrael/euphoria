import React from "react";
import { Link } from "react-router-dom";
import vision from "../../images/vision.jpg";
import valores from "../../images/valores.jpg";
import mision from "../../images/mision.jpg";
import styled from "styled-components";
const About = () => {
  return (
    <>
      <ContainerAbout>
        <main>
          <img src={mision} alt=" Cual es nuestra misión" />
          <div>
            <h1>Nuestra Misión</h1>
            <p>
              Nuestro objetivo es enriquecer la comunicación digital de las
              empresas en internet. Por ello nuestra misión se basa en los
              desafíos que marca un mercado en constante cambio junto con las
              necesidades de nuestros clientes. Creamos soluciones adaptadas a
              cada cliente ofreciéndole el control total de su diseño final.
            </p>
          </div>
        </main>
        <main className="content-reverse">
          <div>
            <h1>Visión</h1>
            <p>
              En Euphoria somos conscientes de que Internet se ha convertido en
              una herramienta imprescindible para cada negocio. Tenemos una
              visión diferenciada en cuanto al desarrollo de una empresa en el
              entorno digital ya que creemos que hasta ahora existía una gran
              carencia de recursos y era muy difícil encontrar una empresa
              especializada. Creemos en la fusión de la Informática y el
              Marketing en convivencia constante con las necesidades de nuestros
              clientes.
            </p>
          </div>
          <img src={vision} alt="Vision" />
        </main>
        <main>
          <img src={valores} alt="Valores de Euphoria" />
          <div>
            <h1>Valores</h1>
            <p>
              El cliente es lo primero trabajamos con el propósito de cumplir
              sus exigencias. Nuestro desarrollo va de la mano del éxito que
              obtengan nuestros clientes a través de nuestro trabajo. Su éxito
              es nuestro éxito. <br></br>
              <b>Dedicación:</b> gracias a una dedicación diaria y constante nos
              hemos ganado la confianza de nuestros clientes. Nos preocupamos
              por ellos y por sus necesidades. <br></br>
              <b>Formación e innovación continua:</b> somos conocedores de que
              el mundo digital está en constante evolución. Mensualmente
              contactamos con todos nuestros clientes para escuchar novedades y
              nuevas situaciones.<br></br>
              <b>Integridad: </b>mantenemos todo lo que decimos sin crear falsas
              expectativas. <br></br>
              <b>Trabajo en equipo:</b> este es nuestro valor más importante
              para poder garantizar el resto. Fusionamos los conocimientos de
              todo el equipo en un resultado final.
            </p>
          </div>
        </main>
      </ContainerAbout>
      <Footer>
        <div >
          <h2>
            Conozca nuestra Responsabilidad <br></br>Social coorporativa
          </h2>
          <p>
            En el ámbito social, tras haber alcanzado unos objetivos
            financieros, la empresa procurará enviar el 20% de los beneficios a
            organizaciones de ayuda para solucionar la pobreza y hambre en el
            mundo. También ayudaremos a los más jóvenes a aprender a programar
            en páginas web con nuestros cursillos
          </p>
          <p>
            En el ámbito medioambiental, la empresa colabora en la reducción de
            CO2 en la atmósfera al ser una empresa que no necesita envio ni
            recibo de mercancías debido a que trabajamos 100% online{" "}
          </p>
          <Link to="/error" className="btn btn-primary">
            Conoce más...
          </Link>
        </div>
      </Footer>
    </>
  );
};

export default About;

const ContainerAbout = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  margin: 10px;
  text-align: justify;
  .content-reverse {
    display: flex;
    flex-direction: column-reverse;
  }

  main {
    img {
      width: 100%;
    }
  }
  @media only screen and (min-width: 800px) {
    grid-auto-flow: row;
    .content-reverse {
      flex-direction: row;
    }
    main {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      img {
        max-width: 600px;
        max-height: 400px;
      }
    }
  }
`;

const Footer = styled.footer`
display: flex;
align-items: center;
justify-content: center;
  div{
    width: 60%;
    text-align: justify;
    margin: 20px;
  }
`;
