import React, { Component } from 'react';
import './App.css';
import  Navbar from './components/layout/Navbar'
import Users from './components/users/Users';

// class based component 
class App extends Component{
  render() {
        
    return (
      <div className="App">
        <Navbar />
        <Users />
      </div>
    );
  }
}

// the && - its saying, only show name if showName is true

export default App;
