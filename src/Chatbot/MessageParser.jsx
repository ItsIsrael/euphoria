import React from 'react';

const MessageParser = ({ children, actions }) => {
const parse = (message) => {
    if (message.includes('Hola') | message.includes('hola') ) {
      console.log('hi');
      actions.handleHello();
    }
        if (message.includes('dog')) {
      actions.handleDog();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;