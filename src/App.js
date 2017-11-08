import React from 'react';
import Form from './form';
import Output from './output';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: [
      {name: 'Angela', gifts: ['sweater', 'cat poster']},
      {name: 'Dwight', gifts: ['beet juicer', 'water backpack']},
      {name: 'Jim', gifts: ['personalized comic book']},
      {name: 'Michael', gifts: ['magic set', 'iPod', 'teapot']}
  ]};
}

  addPerson(newPerson){
   this.setState({list: [...this.state.list, newPerson]})
  }
  
  render() {
    const list = this.state.list;
    const people = list.map((person,index) => 
      <Output person = {person} key = {index} />
    )
    return (
    <div>
      <Form createPerson={(value) => this.addPerson(value)} />
      {people}
    </div>
    );
  }
}

export default App;

