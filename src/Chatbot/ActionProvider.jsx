import React from 'react';
import { Link } from 'react-router-dom';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {
    const botMessage = createChatBotMessage('Hola, es un placer poder ayudarte.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const option1 = ()=> {
    const botMessage = createChatBotMessage('Dirigete a ' );
        setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const notFound = ()=>{
    const botMessage = createChatBotMessage('No he podido encontrar una respuesta, intenta de nuevo.')
        setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    })); 
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            option1,
            notFound
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;