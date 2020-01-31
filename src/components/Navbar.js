import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
		        <div className="container">
		          <div className="navbar-header">
		            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		              
		            </button>
		            <a className="navbar-brand" href={this.props.github} target="_blank">
		              My Github
		            </a>
		          </div>
		          <div id="navbar" className="collapse navbar-collapse">
		            
		          </div>
		        </div>
		      </nav>
		)
	}
}

export default NavBar;