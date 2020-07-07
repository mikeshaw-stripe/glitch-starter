import React from 'react';
import '../styles.css';

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements. Also demos importing styles. */
const ListOfThings = ({ items }) => (
  <ul class="list">
    {
      items.map(i => (
        <li class="listItem">{i.name}</li>
      ))
    }
  </ul>
);

export default ListOfThings;
