import React, { Component } from 'react';
import Header from './Header/Header';
import AddKoala from './AddKoala/AddKoala';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <AddKoala />
      <Footer />
      </div>
    );
  }
}

export default App;
