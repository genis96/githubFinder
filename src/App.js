import React, { Component } from 'react';
import './App.css';
import  Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'

// class based component 
class App extends Component{
  render() {
        
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

// the && - its saying, only show name if showName is true

export default App;
