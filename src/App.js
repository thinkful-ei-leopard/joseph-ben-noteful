import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Sidebar from './sidebar';
import List from './list';
import Folder from './folder';
import Note from './note';

export default function App() {
  return(
    <section>
      <Header />
      <Sidebar />
      <List />
  </section>
  )
}