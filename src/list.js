import React from 'react';
import ReactDOM from 'react-dom';
import Note from './note'

export default function List() {
  return(
    <ul className='main-list'>
      <Note />
      <button className='add-note'>Add note</button>
    </ul>
  )
}