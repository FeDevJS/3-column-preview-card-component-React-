import React from 'react';
import { Column } from './components/js/Column.js';

export const App = function() {
  return (
    <React.StrictMode>
      <Column 
      colClass="sedan--column" 
      title="SEDANS" 
      titleClass="sedan--title"
      carIcon="sedan--icon"
      descriptionClass="sedan--description"
      description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      btnClass="sedan--btn"
      />
      <Column 
      colClass="suvs--column" 
      title="SUVS" 
      titleClass="suvs--title" 
      carIcon="suvs--icon"
      descriptionClass="suvs--description"
      description="SUVs Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      btnClass="suvs--btn"
      />
      <Column 
      colClass="luxury--column" 
      title="LUXURY" 
      titleClass="luxury--title" 
      carIcon="luxury--icon"
      descriptionClass="luxury--description"
      description="Luxury Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
      btnClass="luxury--btn"
      />
    </React.StrictMode>
  );
};
console.log(React);