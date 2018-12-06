import React, { Component } from 'react';
import Header from './Header/Header';
import AddKoala from './AddKoala/AddKoala'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <AddKoala />
      </div>
    );
  }
}

export default App;
