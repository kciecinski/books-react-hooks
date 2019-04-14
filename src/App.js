import React, { Component } from 'react';
import 'bulma/css/bulma.css';


import { BrowserRouter as Router, Route } from "react-router-dom";
import BooksListContainer from './containers/BooksListContainer';
import BooksFinderContainer from './containers/BooksFinderContainer'
import DetailedBookCard from './components/DetailedBookCard'
class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Route path='/bookFinder' exac component={BooksFinderContainer}/>
        <Route path='/bookList' component={BooksListContainer}/>
        <Route path='/books/:book_name' component={DetailedBookCard}/>
      </Router>
      </>
    )
  }
}

export default App;
