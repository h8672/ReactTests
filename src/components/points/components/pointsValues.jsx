import React, { Component } from 'react';

// import "./points.css"

export class PointsValues extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      onValueSelect : this.props.onValueSelect,
    }
  }

  render() {
    const values = []
    for(let i = 0; i < this.props.values.length; i++){
      if(i === this.props.selectedValue) {
        values.push(
          <div key={i} onClick={this.state.onValueSelect.bind(this, i)} className="list-group-item points-values-item points-values-selected">
            {this.props.values[i]}
          </div>
        )
      }
      else {
        values.push(
          <div key={i} onClick={this.state.onValueSelect.bind(this, i)} className="list-group-item points-values-item">
            {this.props.values[i]}
          </div>
        )
      }
    }

    return (
      <div className="points-values list-group">
        {values}
      </div>
    )
  }
}

export default PointsValues;
