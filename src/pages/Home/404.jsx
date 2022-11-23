import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NotFound = () => {
  return (
    <Error>
      <h1>Error 404</h1>
      <Link to="/" className="btn btn-danger">Volver a Home.</Link>
    </Error>
  );
};

export default NotFound;

const Error = styled.main`
  width: 100%;
  min-height: 91vh;
  background-color: #0e1129;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    font-family: 'Cinzel Decorative', cursive;
    font-weight: bold;
    font-size:50px;
  }
`;
