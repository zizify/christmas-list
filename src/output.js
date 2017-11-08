import React from 'react';

export default function Output(props){
  const gifts = props.person.gifts.map((gift, index) => <li key={index}>{gift}</li>)
  return (
    <div>
      <h2>{props.person.name}</h2>
      <ul>
      {gifts}
      </ul>
    </div>
  )
}