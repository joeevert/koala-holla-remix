import React, { Component } from 'react';
import Header from './Header/Header';
import AddKoala from './AddKoala/AddKoala'
import './App.css';
import KoalaCards from './KoalaCards/KoalaCards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddKoala />
        <KoalaCards />
      </div>
    );
  }
}

export default App;
