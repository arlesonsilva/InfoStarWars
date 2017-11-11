import React, { Component } from 'react';
import $ from 'jquery';

class Navbar extends Component{

	constructor() {
	    super();

	    this.state = {
	      navbar: null    	     
	    };
	}

	mostrarMenu() {
		$(this).toggleClass("active");
	    $("nav").toggleClass("show");
	}

	handleclick = (id) => {
		if (id === 'https://swapi.co/api/planets/') {
			console.log("planets")
		}
	}	

	render() {
 		return( 
			<div>
				<div id="container">
					<div id="burger" onClick={this.mostrarMenu}>
				    	<div className="bun top"></div>
				        <div className="filling"></div>
				        <div className="bun bottom"></div>
				  	</div>
				</div>

				<nav>
					<ul>
					    <li>
					      <a href="#" onClick={() => this.handleclick("home")}>Home</a>
					    </li>
					    <li className="green">
					      <a href="#" onClick={() => this.handleclick("https://swapi.co/api/films/")}>Filmes</a>
					    </li>
					    <li className="red">
					      <a href="#" onClick={() => this.handleclick("https://swapi.co/api/people/")}>Pessoas</a>
					    </li>
					    <li className="yellow">
					      <a href="#" onClick={() => this.handleclick("https://swapi.co/api/planets/")}>Planetas</a>
					    </li>
					    <li className="purple">
					      <a href="#" onClick={() => this.handleclick("https://swapi.co/api/starships/")}>Naves</a>
					    </li>
				  	</ul>
				</nav>				
			</div>				
		);
	}
}

export default Navbar; 