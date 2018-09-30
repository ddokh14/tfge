import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header/>
        <SideMenu/>
      </div>
    );
  }
}

export default App;
