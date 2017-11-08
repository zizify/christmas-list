import React from 'react';
import App from './App'

export default function Person(props){
  console.log(props.person)
  const gifts = props.person.gifts.map(((gift, index) => 
      <li key={index} id={props.person.name + "-" + index}>
        {gift}
        <br/>
        <button onClick = {() =>  props.remove(props.personKey + "-" + index)}>Delete
        </button>
      </li>
  ))
  return (
    <div>
      <h2>{props.person.name}</h2>
      <ul>
      {gifts}
      </ul>
    </div>
  )
}