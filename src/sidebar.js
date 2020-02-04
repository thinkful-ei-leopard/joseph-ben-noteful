import React from 'react';
import ReactDOM from 'react-dom';

export default function Sidebar() {
  return(
    <sidebar className='sidebar'>
      <Note />
      <button className='add-folder'>Add folder</button>
    </sidebar>
  )
}