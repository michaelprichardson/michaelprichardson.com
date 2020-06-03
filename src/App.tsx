import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import NotFound from "./components/layout/NotFound";

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/not-found" component={NotFound} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
