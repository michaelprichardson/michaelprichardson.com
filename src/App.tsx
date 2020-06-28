import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/analytics"

import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import Blog from "./components/blog/Blog";
import NotFound from "./components/layout/NotFound";

import './App.scss';

firebase.initializeApp({
  apiKey: "AIzaSyAbMPUhsjGGGAJRE3kI1OVISzcjOBmRxRs",
  authDomain: "michaelprichardson-36f85.firebaseapp.com",
  databaseURL: "https://michaelprichardson-36f85.firebaseio.com",
  projectId: "michaelprichardson-36f85",
  storageBucket: "michaelprichardson-36f85.appspot.com",
  messagingSenderId: "414941318127",
  appId: "1:414941318127:web:3405e958f307c24aeb841a",
  measurementId: "G-D72N10QWWG",
});
firebase.analytics();

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <div className="container">
          <Route exact path="/blog/post/:postId" component={Blog} />
          <Route exact path="/not-found" component={NotFound} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
