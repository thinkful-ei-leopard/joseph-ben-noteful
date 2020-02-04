import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import Header from './header';
import Sidebar from './notebar';
import List from './list';
// // import Folder from './folder';
// import Note from './note';
import NotFoundPage from './notfoundpage'

export default function App() {
  return(
    <section>
      <Header />
      <Sidebar />

      {/* <List /> */}
      {/* if the current path is root show the list */}
      <Route exact path='/' component={List} />
  </section>
  )
}