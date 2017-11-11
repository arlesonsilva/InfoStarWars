import React, { Component } from 'react';

class Content extends Component{

	constructor() {
	    super();

	    this.state = {
	      hits: [],
	      isLoading: false	      
	    };
	}

	componentWillMount() {
	    this.setState({ isLoading: true });
	    
	    fetch('https://swapi.co/api/planets/')
	    	.then(response => response.json())
	  		.then(data => this.setState({ hits: data.results, isLoading: false }));
	}

	render() {
		const { hits, isLoading } = this.state;

	    if (isLoading) {
	      return <div> <p className="title">Loading...</p> </div>;
	    }

 		return(

			<div className="row">
				<h2 className="title">Planetas</h2>
				<div className="col">
					<ul>
						{hits.map(hit =>
				    		<li className="listitem" key={hit.url}> <a href={hit.name}>{hit.name} </a> </li>
			        	)}
			        </ul>
	        	</div>
			</div>				
		);
	}
}

export default Content; 