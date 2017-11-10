import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Content from './Content';

class App extends Component{

    render() {	
	    return (
	    	<div>
		    	<Header/>
		    	<Navbar/>
		    	<Content/>	    				    	
		    	<Footer/>
	    	</div>
	    );
    }
 			
}

export default App; 