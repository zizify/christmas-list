import React from 'react';
import Form from './form';
import Person from './output';
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

  removeGift(giftIndex){
    const indexes = giftIndex.split('-')
    console.log(indexes)
    this.setState(this.state.list[Number(indexes[0])].gifts.splice(Number(indexes[1])))
  }
  
  render() {
    const list = this.state.list;
    const people = list.map((person,index) => 
      <Person 
        remove={index => this.removeGift(index)} 
        person={person} key={index}
        personKey={index}
      />
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

