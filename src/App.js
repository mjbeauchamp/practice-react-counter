import React, { Component } from 'react';
import Counter from './counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Counter</h1>
        </header>
        <Counter />
      </div>
    );
  }
}

export default App;
