import React from 'react'

export class Card extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        let x = e.target.value;
        this.props.onChange(x)         
    }

    render(){
        return (
        <div className='card'>
            <h1>Hello World!</h1>
            <input onChange = {this.handleChange}/>
            <h2>This is,  {this.props.name}.</h2>
            <p>{this.props.name} is a wonderful Person, he/she filled my life with Joy, 
            I loved him/her and I always will</p>
        </div>
        )
    }
}
