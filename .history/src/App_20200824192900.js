import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>

        <Route path="/admin" component={Admin} />

      </Router>
      <h1>Working</h1>
    </div>
  );
}

export default App;
