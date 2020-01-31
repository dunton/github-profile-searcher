import React, { Component } from 'react';


class Search extends Component {
	onSubmit(e) {
		// prevent form actually submit
		e.preventDefault();

		let username = this.refs.username.value.trim();

		if (!username) {
			alert('Please enter a username');
			return;
		}

		this.props.onFormSubmit(username);
		this.refs.username.value = ' ';

	}

	render() {
		
		return (
			<div>
				<form onSubmit={this.onSubmit.bind(this)} >
					<label>Search Github Users</label>
					<input type="text" ref="username" className="form-control" placeholder="Search Github Users" />
				</form>
			</div>
		)
	}
}

export default Search;