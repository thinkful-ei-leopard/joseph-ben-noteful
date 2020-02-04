import React from 'react';
// import ReactDOM from 'react-dom';
import stateTwo from './App.js'
export default function List() {
  let notes = stateTwo;
  return(
    <>
      <ul className='list'>
        {notes.map(note =>
          <li key={note.id}>
            <a href={`/note/${notes.id}`}>
              {notes.title}
            </a>
          </li>
        )}
      </ul>
    </>
  )
}