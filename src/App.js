import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import Filmes from './Filmes';
import Pessoas from './Pessoas';
import Planetas from './Planetas';
import Naves from './Naves';
import { Switch, Route } from 'react-router-dom';

class App extends Component{

    render() {	
	    return (
	    	<div>
		    	<Header/>
		    	<div className="deathstar"></div>
		    	<Navbar/>
		    	<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/Filmes' component={Filmes}/>			
					<Route path='/Pessoas' component={Pessoas}/>
					<Route path='/Planetas' component={Planetas}/>
					<Route path='/Naves' component={Naves}/>
				</Switch>	    	
		    	<Footer/>
	    	</div>
	    );
    }
 			
}

export default App; 