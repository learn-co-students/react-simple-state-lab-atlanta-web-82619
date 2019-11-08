import React, { Component } from 'react';

class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: this.props.value
        }
    }

    change = () => {
        const newColor = '#333';
        this.setState({
            color: newColor
        })
    }

    render() {
        return (
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.change}></div>
        )
    }
}

export default Cell;
