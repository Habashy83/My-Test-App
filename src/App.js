import React from 'react';
import './App.css';
import {Card} from './Components/Card.js';
import {Window} from './Components/Window'

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
    let pic1 = './images/img2.png'
    let pic2 = './images/img.jpg'

    return (
      
      <div className="App">
        
        <Window
          title = 'This is a title'
          desc = 'This is just a description...'
          src = {pic2}
          alt = 'another pic'
          content = 'those are 2 strangers and this is the blind date show'
        />
                
        <Window
          title = 'This is a title'
          desc = 'This is a description...'
          src = {pic1}
          alt = 'another pic'
          content = 'this is the paragraph content'
        />
                

        <Card 
          name= {this.state.name} 
          onChange = {this.changeName}
        />

      </div>
    );
  }
}

