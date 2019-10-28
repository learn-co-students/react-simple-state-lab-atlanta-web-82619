import React, { Component } from 'react';


export default class Cell extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor(props) {
      super(props)
      this.state = {
        color: this.props.value
    } }
   
    handleclick = () => {
        this.setState({
            color: '#333'
        }) }

    
   
    render() {
      return (
        <div 
            className = 'cell'
            style={{backgroundColor: this.state.color}}
            onClick={this.handleclick} ></div> ) }} 