import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Merchandising = () => {


  return (
    <ContainerMerchandising>
    <div className='principal'>
<h1>¡PROMOCIÓN SORPRESA!</h1>
<h1>50% DE DESCUENTO</h1>

<span>en los planes Business y Business++</span><br></br>
<br></br>
<Link to="/servicios" className='btn btn-info'> Haz upgrade y ahorra</Link>
    </div>
    <div>
      <h3>¡Última oportunidad para ahorrar!</h3> 
      <span>Recibe un 50% de descuento al hacer update al plan business <br></br> Además.</span>
      <ul>
        <li>Recibe un dominio personalizado gratis.</li>
        <li>Agrega Google Analytics.</li>
        <li>Elimina todos los anuncios.</li>
        <li>Disfruta de 10GB de amacenamiento y ancho de banda ilimitado.</li>
        <li>Recibe ayuda 24hrs.</li>
      </ul>
    </div>
    </ContainerMerchandising>
  )
}

export default Merchandising ;

const ContainerMerchandising = styled.main`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


.principal{
  text-align: center;
}
`;