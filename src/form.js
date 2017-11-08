import React from 'react';
import './form.css';

export default function Form(props) {
    return(
        <form onSubmit={e => e.preventDefault()}>
            <label>Name: </label>
            <input></input>
            <label>Gifts: </label>
            <input></input>
            <button>Submit</button>
        </form>
    )
}