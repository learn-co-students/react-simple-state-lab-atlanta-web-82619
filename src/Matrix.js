import React, { Component } from 'react';
import { pattern1 as defMatrix } from './data.js';
import Cell from './Cell.js';

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

let defRow = [];
for(let i = 0; i < 10; i++) {
  defRow.push('#F00');
}
let defArr = [];
for(let i = 0; i < 10; i++) {
  defArr.push(defRow);
}

Matrix.defaultProps = {
  values: defArr
}