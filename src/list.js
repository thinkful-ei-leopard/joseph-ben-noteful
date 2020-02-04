import React from 'react';
import ReactDOM from 'react-dom';
import Note from './note'

export default function List() {
  return(
    <>
      <ul className='list'>
        {Note.map(note =>
          <li key={note.id}>
            <a href={`/note/${note.id}`}>
              {note.title}
            </a>
          </li>
        )}
      </ul>
    </>
  )
}