import React from 'react';

function Card({children}) {
    return (
        <div className="shadow rounded-lg overflow-hidden bg-white">{children}</div>
      );
}

function Title({ children }) {
    return (
      <div className="font-semibold text-black p-4 border-b">
        <h1 className="text-xl">{children}</h1>
      </div>
    );
  }

  function Body({ children }) {
    return <div className="leading-relaxed text-black p-4">{children}</div>;
  }
  
  function Footer({ children }) {
    return <div className="text-black  p-4">{children}</div>;
  }
  
  Card.Title = Title;
  Card.Body = Body;
  Card.Footer = Footer;
  
  export default Card;