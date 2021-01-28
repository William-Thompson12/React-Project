import React from 'react';
import './App.css';
import Board from './components/board';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Board start={'start function'}/>
        <Footer />
      </div>
    );
  }
}

export default App;
