import React from 'react';
import ReactDOM from 'react-dom';

export default function Sidebarnote() {
  return(
    <section className='sidebar'>
      <ul>
      <Route exact path='/' component={Folder};
      <Route exact path='/folder:folderId' component={Folder};
      <Route exact path='/note' component={Notebar};
      </ul>
    </section>
  )
}