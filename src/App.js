import React from 'react';
import './App.css';
import Board from './containers/pushPatternContainer';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
