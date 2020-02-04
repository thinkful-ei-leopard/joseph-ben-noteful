import React from 'react';
import ReactDOM from 'react-dom';
import Route from 'react-router-dom';
import Folder from './folder';
import Notebar from './notebar';


export default function Sidebar() {
  return(
    <section className='sidebar'>
      <ul>
      <Route exact path='/' component={Folder} />
      <Route exact path='/folder:folderId' component={Folder} />
      <Route exact path='/note:Id' component={Notebar} />
      </ul>
    </section>
  )
}