import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Navbar extends Component{

	mostrarMenu() {
		$(this).toggleClass("active");
	    $("nav").toggleClass("show");
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
					      <Link to="/">Home</Link>
					    </li>
					    <li className="green">
					      <Link to="/Filmes">Filmes</Link>
					    </li>
					    <li className="red">						    
					      <Link to="/Pessoas">Pessoas</Link>
					    </li>
					    <li className="yellow">						      
					      <Link to="/Planetas">Planetas</Link>
					    </li>
					    <li className="purple">
					      <Link to="/Naves">Veicúlos</Link>						      
					    </li>
				  	</ul>
				</nav>				
			</div>				
		);
	}
}

export default Navbar; 