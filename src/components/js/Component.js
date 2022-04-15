// import React, { Component } from "react";

//Componente de CLASE
// export class Componente extends Component {
// 	render() { //Cuando el Componente es creado por clases, sí o sí debe tener un render()
// 		return (
// 			<h2 className="header">{this.props.pepe}</h2> //El Componente puede acceder a this, pero cuando es funcional no puede.
// 		);
// 	};
// };

//Componente FUNCIONAL

//Se debe crear el Componente que reciba las PROPS como argumento
export const Componente = function(props) { 
	return <h2 className="header">{props.pepe}</h2>
};