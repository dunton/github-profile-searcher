import React, { Component } from 'react';

import './App.css';
import NavBar from './components/Navbar';
import propTypes from 'prop-types';
import axios from 'axios';
import Profile from './components/github/Profile';
import Search from './components/github/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'dunton',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }


  // get user data from github
  getUserData() {
    const ROOT_URL = 'https://api.github.com/users/';

    const request = axios.get(`${ROOT_URL}${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`)
    
    request
      .then(result => {
        this.setState( { userData: result.data })
        
      }) 
      .catch(error => {
        alert("User not Found");
      })
  }

  // get user repos from github
  getUserRepos() {
    const ROOT_URL = 'https://api.github.com/users/';

    const request = axios.get(`${ROOT_URL}${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}&sort=created`)
    
    request
      .then(result => {
        this.setState( { userRepos: result.data })
        console.log(result)
        
      })
      .catch(error => {
        console.log(error);
      })
    
  }

  handleFormSubmit(username) {
    this.setState( {username: username}, function() {
      this.getUserData();
      this.getUserRepos();
    })
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    const github = "https://github.com/dunton";

    return (
      <div>
        <NavBar github={github} />
        <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
        <br />
        <Profile {...this.state} />
      </div>
    
      
    );
  }
}

App.propTypes = {
  clientId: propTypes.string,
  clientSecret: propTypes.string
};
App.defaultProps = {
  clientId: '4e52ed9a924283d72889',
  clientSecret: '763ad5f5afabe42845b02c98e2f67ac5f2238f41'
};



export default App;
