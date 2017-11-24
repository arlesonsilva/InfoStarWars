import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Filmes extends Component{

	constructor(props) {
	    super(props);

	    this.state = { hits: [], pages: [], isLoading: false }	         			 
	}

	componentWillMount() {		
	    this.sicronizar('https://swapi.co/api/films/');	 
	}

  	_handleClick(e) {
	    var id = e;      
	    $("#"+id).toggle();
	}

	sicronizar(url) {    
	    this.setState({ isLoading: true });	    	    		
		if(url === null) {
			url = 'https://swapi.co/api/films/';
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
				<h2 className="title">Filmes</h2>
				<div className="col">
					<ul>
						{ hits.results.map(
							item =>  
								
									<li className="listitem" key={item.title}> 
										<Link to="#" onClick={()=>{this._handleClick(item.episode_id);}}>
											{item.title}
										</Link>																														
																																																
										<div className="descricao" id={item.episode_id}>
				        					Episódio: {item.episode_id}
				        					<br/>
				        					Sinopsia: {item.opening_crawl}
				        					<br/>
				        					Diretor: {item.director}
				        					<br/>
				        					Produção: {item.producer}
				        					<br/>
				        					Data de Lançamento: {item.release_date}				        					
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

export default Filmes; 