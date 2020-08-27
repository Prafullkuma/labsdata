import React from 'react';
import './App.css';
import Nav from './Component/Nav'
import Admin from './Component/Admin'
import Main from './Component/Main'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
}

export default App;
