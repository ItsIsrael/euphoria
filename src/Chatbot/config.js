import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './DogPicture';
const botName = 'Phorya';

const config = {
  initialMessages: [createChatBotMessage(`Hola, Mi nombre es ${botName}, es un placer poder ayudarte.
  Introduce un numero: 
  1- Ayuda
  2- Soporte Tecnicó
  3- Nuestras novedades
  4- 
  `)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#EE82EE',
    },
    chatButton: {
      backgroundColor: 'green',
    },
  }, widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;