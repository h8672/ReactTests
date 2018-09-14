import React, { Component } from 'react';

import NavIcon from './../../assets/icons/baseline-menu-24px.svg'

import './nav-menu.css'

export class NavMenu extends Component {
  render() {
    const header = (
      <div className="">
        <img src={NavIcon} alt="nav-icon" /> Menu
      </div>
    )

    const body = (
      <div className="nav-menu-body">
        <div className="nav-menu-header">React components</div>
        <div className="nav-menu-group" style={{gridTemplateColumns : "repeat(1, 1fr)"}}>
          <a href="/Gantt">Gantt</a>
        </div>
        <div className="nav-menu-header">React tests</div>
        <div className="nav-menu-group" style={{gridTemplateColumns : "repeat(1, 1fr)"}}>
          <a href="/points">Point calculator</a>
        </div>
      </div>
    )

    const footer = (
      <div className="">Website created with React</div>
    )
    return (
      <div className="nav-menu">
        {header}
        {body}
        {footer}
      </div>
    );
  }
}

export default NavMenu;
