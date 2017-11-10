import React, { Component } from 'react';	

class Content extends Component{

	constructor() {
	    super();

	    this.state = {
	      hits: [],
	      isLoading: false
	    };
	}

	componentDidMount() {
	    this.setState({ isLoading: true });

	    fetch("https://swapi.co/api/planets/")
	    	.then(response => response.json())
	  		.then(data => this.setState({ hits: data.results, isLoading: false }));
	}

	render() {
		const { hits, isLoading } = this.state;

	    if (isLoading) {
	      return <div> <p>Loading ...</p> </div>;
	    }

 		return( 
			<div>
				{hits.map(hit =>
		    		<div key={hit.url}> <a href={hit.name}>{hit.name} </a> </div>
	        	)}
			</div>				
		);
	}
}

export default Content; 