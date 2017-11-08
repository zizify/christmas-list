'use strict';
import React from 'react';

export default function Output(props){
  return (
    <div>
      <h2>{props.person.name}</h2>
      <ul>
      <li>{props.person.gifts[0]}</li>
      <li>{props.person.gifts[1]}</li>
      </ul>
    </div>
  )
}