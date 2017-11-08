import React from 'react';
import './form.css';

export default class Form extends React.Component {
    // estlint-disable-next-line
    constructor(props) {
        super(props);

    }
    handleSubmit(e) {
        e.preventDefault();
        const name = this.nameInput.value.trim();
        const gifts = this.giftsInput.value.trim().split(', ');
        this.props.createPerson({name, gifts})
        this.nameInput.value = '';
        this.giftsInput.value = ''
    }

    render() {
        return(
            <form onSubmit={e => this.handleSubmit(e)} >
                <label>Name: </label>
                <input type='text' name='nameInput' id='nameInput'
                ref={(input) => {this.nameInput = input}}></input>
                <label>Gifts: </label>
                <input type='text' name='giftsInput' id='giftsInput'
                ref={(input) => {this.giftsInput = input}}></input>
                <button>Submit</button>
            </form>
        )
    }
}