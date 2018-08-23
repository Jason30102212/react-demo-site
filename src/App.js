import React, { Component } from 'react';
import './App.css';

import Overview from './components/Overview/Overview';
import BasicFunctionalComponent from './components/BasicFunctionalComponent/BasicFunctionalComponent';
import BasicClassComponent from './components/BasicClassComponent/BasicClassComponent';
import BasicDynamicContentComponent from './components/BasicDynamicContentComponent/BasicDynamicContentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Overview />
        <BasicDynamicContentComponent />
      </div>
    );
  }
}

export default App;
