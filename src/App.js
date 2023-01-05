import React from 'react';
import './App.css';
import {Card} from './Components/Card.js';

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: 'Yasser'}
    this.changeName = this.changeName.bind(this)
  }

  changeName(newName){
    
    this.setState({name : newName})
  }

  render(){  
    return (
      <div className="App">
        <Card 
        name= {this.state.name} 
        onChange = {this.changeName}/>
      </div>
    );
  }
}

