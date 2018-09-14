import React, { Component } from 'react';

// import "./points.css"

export class PointsChange extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      onChange : this.props.onChange,
      previewValue : this.props.previewValue
    }
    this.dragging = false;
    this.sides;
    this.value = (this.props.previewValue ? this.props.previewValue : 0);
  }

  rangeMouseMove(event) {
    if(!this.dragging) return;
    const mousePosition = { x: event.clientX, y: event.clientY }
    console.log("Mouse moved! " + JSON.stringify(mousePosition))
  }
  rangeDragStart(event) {
    event.preventDefault()
    this.dragging = true;
    const rect = event.target.getBoundingClientRect()
    this.sides = { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left }
    console.log(JSON.stringify(this.sides))
  }
  rangeDragEnd(event) {
    event.preventDefault()
    this.dragging = false;
    // this.state.onChange(this.value, this.state.selectedValue)
  }

  render() {
    const pointRange = (
      <div className="points-change-range" style={{ transform: "rotate("+(this.value * 15)+"deg)"}} draggable={true}
         onDragStart={(e) => {this.rangeDragStart(e)}} onDrop={(e) => {this.rangeDragEnd(e)}} onClick={(e) => {this.rangeDragEnd(e)}}>
        <div className="points-change-range-thumb" />
      </div>
    )

    const pointToggles = (
      <div className="points-change-toggles">
        <div className="btn btn-danger" onClick={this.state.onChange.bind(this, -1, this.props.selected)}>-1</div>
        <div className="btn btn-success" onClick={this.state.onChange.bind(this, 1, this.props.selected)}>1</div>
        <div className="btn btn-danger" onClick={this.state.onChange.bind(this, -5, this.props.selected)}>-5</div>
        <div className="btn btn-success" onClick={this.state.onChange.bind(this, 5, this.props.selected)}>5</div>
      </div>
    )

    return (
      <div className="points-change" onMouseMove={(e) => {this.rangeMouseMove(e)}}>
        <div className="points-change-display">neg ---- pos</div>

        <input className="points-change-display" type="number" disabled={true}
          defaultValue={this.value} />

        {pointRange}

        {pointToggles}
      </div>
    )
  }
}

export default PointsChange;
