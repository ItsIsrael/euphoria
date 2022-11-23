import React from "react";
import styled from "styled-components";
const Examples = () => {
  return (
    <ContainerExamples>
      <button>
        <a href="https://qxjoj.csb.app/">Shoe</a>
      </button>
      <button>
        <a href="https://f79ucc.csb.app/">Scene</a>
      </button>
      <button>
        <a href="https://sbwt0i.csb.app/">Logo</a>
      </button>
    </ContainerExamples>
  );
};

export default Examples;

const ContainerExamples = styled.main`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  width: 100%;
  height: 75vh;
  background-color: #0e1129;
  gap: 20px;
  a {
    text-decoration: none;
    color: aliceblue;
    width: 200px;
    height: 100px;
  }

  button {
    --glow-color: rgb(217, 176, 255);
    --glow-spread-color: rgba(191, 123, 255, 0.781);
    --enhanced-glow-color: rgb(231, 206, 255);
    --btn-color: rgb(100, 61, 136);
    border: 0.25em solid var(--glow-color);
    padding: 1em 3em;
    color: var(--glow-color);
    font-size: 15px;
    font-weight: bold;
    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 1em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
    text-shadow: 0 0 0.5em var(--glow-color);
    position: relative;
    transition: all 0.3s;
  }

  button::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  button:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  button:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }
    @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
