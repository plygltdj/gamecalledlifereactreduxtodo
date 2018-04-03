import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Todo Application</h1>
        </header>
        <p className="App-intro">
          <form>
              <input type="text" placeholder="Add a new task" />
              <button type="submit">
                  Add Todo
              </button>
          </form>
          <hr/>
            <p>
                Following are the List of Items you added:
            </p>
        </p>
          {/* Adding List */}
          {/* And Getting the List*/}
      </div>
    );
  }
}

export default App;
