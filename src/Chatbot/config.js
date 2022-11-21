import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './DogPicture';
const botName = 'Phorya';

const config = {
  initialMessages: [createChatBotMessage(`Hola, Mi nombre es ${botName}, es un placer poder ayudarte.`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#EE82EE',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  }, widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;