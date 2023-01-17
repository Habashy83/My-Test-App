import React from 'react'

export class Window extends React.Component {
    render(){
    
        return (
            <div className = 'window'>
                <h1>{this.props.title}</h1>
                <h2>{this.props.desc}</h2>
                <img src={this.props.src} alt = {this.props.alt} width= '400px'/>
                <p>{this.props.content}.</p>
            </div>
        )
    }
}
