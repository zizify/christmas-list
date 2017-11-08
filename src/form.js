import React from 'react';
import './form.css';

export default function Form(props) {
    return(
        <form onSubmit={e => {e.preventDefault(); 
        props.createPerson(
            {
                name: e.target.nameInput.value.trim(), 
                gifts: e.target.giftsInput.value.trim().split(', ')
            }
        )}} >
            <label>Name: </label>
            <input type='text' name='nameInput' id='nameInput'></input>
            <label>Gifts: </label>
            <input type='text' name='giftsInput' id='giftsInput'></input>
            <button>Submit</button>
        </form>
    )
}