import React from 'react';
import { Componente } from "./components/Component";

export const App = function() {
  let hi = "Hello World!";
  return (
    <>
    <h1 className="header">{hi}</h1>
    <Componente pepe="Sigo siendo Pepe" />;
    </>
  );
};
