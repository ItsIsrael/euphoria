import React, { useState } from "react";
import Iframe from "react-iframe";
import styled from "styled-components";
import { Triangle } from "react-loader-spinner";
export const Location = () => {
  const [loading, setLoading] = useState(false);
  const map = document.getElementById("map");
  if (map) {
    setTimeout(() => {

      setLoading(false);
    }, 3000);
  }
  return (
    <ContentLocation>
      {
        
      }
      {loading ? (
        <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47698.99961096366!2d-0.8949809!3d41.65169125000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914dd5e618e91%3A0x49df13f1158489a8!2sZaragoza!5e0!3m2!1ses!2ses!4v1668160805534!5m2!1ses!2ses"
          width="100%"
          height="100%"
          id="map"
          className=""
          display="block"
          position="relative"
        />
      )}
    </ContentLocation>
  );
};

const ContentLocation = styled.div`
  width: 100%;
  height: 60vh;
`;
