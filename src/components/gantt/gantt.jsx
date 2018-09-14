import React, { Component } from 'react';

import "./gantt.css"

export class Gantt extends Component {
  render() {
    const loading = (<div>Loading Gantt!...</div>)
    // TODO: const ganttData = []

    const leftTools = (
      <div className="gantt-left gantt-tools">
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
      </div>
    )
    const rightTools = (
      <div className="gantt-right gantt-tools">
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
        <img className="gantt-tool" src="" alt="tool" />
      </div>
    )
    const grid = (
      <div className="gantt-grid">
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
        <div className="gantt-grid-item" />
      </div>
    )
    const content = (
      <div className="gantt-content">
        {grid}
      </div>
    )

    return (
      <div className="gantt-background">
        <div className="gantt">
          <div className="gantt-nav">
            <div>Navigation</div>
          </div>
          {leftTools}
          {rightTools}
          {content}
        </div>
      </div>
    );
  }
}

export default Gantt;
