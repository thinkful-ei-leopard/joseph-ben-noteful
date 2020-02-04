import React from 'react';
import ReactDOM from 'react-dom';


export default function Note() {
  return(
    <section>
      <li className='note'></li>
      <h2>Note #</h2>
      <p>Date modified ###</p>
      <button className='delte-button'>Delete Note</button>
    </section>
  );
}