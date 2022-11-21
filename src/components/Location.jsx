import React from 'react';
import Iframe from 'react-iframe'
import styled from 'styled-components';
export const  Location = () =>{
  return (
   <ContentLocation>
<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47698.99961096366!2d-0.8949809!3d41.65169125000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914dd5e618e91%3A0x49df13f1158489a8!2sZaragoza!5e0!3m2!1ses!2ses!4v1668160805534!5m2!1ses!2ses"
        width="100%"
        height="100%"
        id=""
        className=""
        display="block"
        loading="lazy"
        position="relative"/>
        <div>
          
        </div>
        </ContentLocation> 
  );
}


const ContentLocation = styled.div`
width: 100%;
height: 60vh;
`;