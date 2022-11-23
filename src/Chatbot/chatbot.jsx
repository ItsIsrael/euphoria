import React from "react";
import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

const ChatbotComponent = () => {

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  return (
    <div>
    
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            saveMessages={saveMessages}
            headerText="Asistente personal"
            placeholderText="Introduzca una respuesta."
          />
        </div>
  );
};

export default ChatbotComponent;
