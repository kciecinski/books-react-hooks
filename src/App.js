import React, { Component } from 'react';
import 'bulma/css/bulma.css';


import { BrowserRouter as Router, Route } from "react-router-dom";
import BooksListContainer from './containers/BooksListContainer';
import BooksFinderContainer from './containers/BooksFinderContainer'
class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Route path='/bookFinder' exac render={BooksFinderContainer}/>
        <Route path='/bookList' render={BooksListContainer}/>
      </Router>
      </>
    )
  }
}

export default App;
