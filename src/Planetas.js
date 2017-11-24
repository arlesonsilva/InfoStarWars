import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Planetas extends Component{

	constructor(props) {
	    super(props);

	    this.state = { hits: [], pages: [], isLoading: false }	         			 
	}

	componentWillMount() {		
	    this.sicronizar('https://swapi.co/api/planets/');	 
	}

  	_handleClick(e) {
	    var id = e.replace(" ","");      
	    $("#"+id).toggle();
	}

	sicronizar(url) {    
	    this.setState({ isLoading: true });	    	    		
		if(url === null) {
			url = 'https://swapi.co/api/planets/';
			axios.get(url)
				.then(response => { this.setState({ hits: response.data, pages: response.data, isLoading: false }); })
		  		.catch(error => { console.log('teste2 '+error); });
		}else{
			axios.get(url)
				.then(response => { this.setState({ hits: response.data, pages: response.data, isLoading: false }); })
		  		.catch(error => { console.log('teste2 '+error); });		
		}
		
	}

	render() {
		const { hits, pages, isLoading } = this.state;		
	     
	    if (isLoading) {
	      return <div> <p className="title">Loading...</p> </div>;
	    }	    	  	    

 		return(
			<div className="row">
				<h2 className="title">Planetas</h2>
				<div className="col">
					<ul>
						{ hits.results.map(
							item =>  
								
									<li className="listitem" key={item.name}> 
										<Link to="#" onClick={()=>{this._handleClick(item.name);}}>
											{item.name}
										</Link>																														
																																																
										<div className="descricao" id={item.name.replace(" ","")}>
				        					peiodo de rotação: {item.rotation_period}
				        					<br/>
				        					periodo orbital: {item.orbital_period}
				        					<br/>
				        					diametro: {item.diameter}
				        					<br/>
				        					clima: {item.climate}
				        					<br/>
				        					gravidade: {item.gravity}
				        					<br/>
				        					terreno: {item.terrain}
				        					<br/>
				        					população: {item.population}				        					
				        				</div>
										
									</li>									 								
							 
						)}
			        </ul>			        
			        <p className="paginacao">			        	
						<a className="paginacao" href="#" key={pages.previous} onClick={()=>{this.sicronizar(pages.previous);}}>Anterior </a>						
						<a className="paginacao" href="#" key={pages.next}     onClick={()=>{this.sicronizar(pages.next);}}> Próximo</a>
					</p>			        							        		        			        		           			        							        		        			        		           
	        	</div>	        								
			</div>					
		);
 		
	}

}

export default Planetas; 