import React from 'react';
import './App.css';
import Board from './containers/pushPatternContainer';
import Header from './components/header';
import Footer from './components/footer';
import Popup from './containers/popupContainer'

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Popup />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
