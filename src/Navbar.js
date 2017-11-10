import React, { Component } from 'react';
import $ from 'jquery';

class Navbar extends Component{
handleToggle() {
    $(this).toggleClass("active");
    $("nav").toggleClass("show");
};
	render() {
 		return( 
			<div>
				<div id="container" onClick={this.handleToggle}>
					<div id="burger">
				    	<div className="bun top"></div>
				        <div className="filling"></div>
				        <div className="bun bottom"></div>
				  	</div>
				</div>

				<nav>
					<ul>
					    <li>
					      <a href="#">Home</a>
					    </li>
					    <li className="green">
					      <a href="#">Filmes</a>
					    </li>
					    <li className="red">
					      <a href="#">Pessoas</a>
					    </li>
					    <li className="yellow">
					      <a href="#">Planetas</a>
					    </li>
					    <li className="purple">
					      <a href="#">Naves</a>
					    </li>
				  	</ul>
				</nav>
			</div>				
		);
	}
}

export default Navbar; 