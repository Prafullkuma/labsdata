import React from 'react';
import './App.css';
import Nav from './Component/Nav'
import Admin from './Component/Admin'

import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/admin" component={Admin} />
        <Route exact path="/" component={App} />
      </Router>
      <h1>Working</h1>
    </div>
  );
}

export default App;
