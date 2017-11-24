import React, { Component } from 'react';

class Home extends Component{

	render() {		
 		return(
			<div className="row">				
				<form id="form-starwars">
      				<textarea id="f-intro" disabled>Há muito tempo, em uma galáxia tão tão distante...</textarea>
      				<textarea id="f-text" disabled rows="5">
						Os desenvolvedores Arleson Silva e Tiago Maia tiveram inicio a mais uma missão em sua jornada desenvolver 
						uma aplicação em react que consuma uma api pública 'https://swapi.co/documentation' para mostrar de forma elegante suas informações
      				</textarea>
    			</form>
    		</div>				
		);
	}
}

export default Home; 