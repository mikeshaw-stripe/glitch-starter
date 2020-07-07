import React from 'react';
import ListOfThings from './ListOfThings';

const list = [
  { name: 'Steve' },
  { name: 'George' },
  { name: 'Martha' },
  { name: 'Slartibartfast' },
  { name: 'Nathaniel' },
  { name: 'Superfly' },
];

/* the main page for the index route of this app */
const HelloWorld = () => (
  <div>
    <ListOfThings items={list} />
  </div>
)

export default HelloWorld;
