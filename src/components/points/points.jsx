import React, { Component } from 'react';

import "./points.css"

import { PointsChange } from './components/pointsChange'
import { PointsValues } from './components/pointsValues'

export class Points extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      users : [], //entry {name: "troll", points: 50}
      selectedUser : this.props.selectedUser, // users[this.state.selectedUser]
      selectedValue : this.props.selectedValue, // points[this.state.selectedValue]
      defaultUser : "",
      defaultPoints : 0,
      log: []
    }
  }

  componentWillMount() {
    this.setState({selectedUser: 0, selectedValue: 1})
    console.log("component mounts!")
  }

  selectUser(id) { this.setState({selectedUser : id}) }
  selectValue(id) { if(id === 0) return; this.setState({selectedValue : id}) }

  addLog(data) {
    let logData = this.state.log;
    logData.push(data)
    return logData;
  }

  assignPointsToUser(name, points, log){
    this.setState({
      users : this.state.users.map( (e) => ( e.name === name ? Object.assign({}, e, { points: points }) : e ) ),
      log : this.addLog(log)
    })
  }

  changePoints(value, target) {
    let array = this.state.users
    const points = this.state.users[this.state.selectedUser].points
    points[target] += value
    // console.log("current value: "+this.state.selectedValue)
    //array[this.state.selectUser].points = points
    const username = this.state.users[this.state.selectUser]
    const log = { name: this.state.users[this.state.selectedUser].name, points: JSON.parse(JSON.stringify(points)), change: value }
    this.assignPointsToUser(username, points, log)
  }

  endTurn() {
    for(let i = 0; i < this.state.users.length; i++) {
      const points = this.state.users[i].points
      points[0] += points[1];
      points[0] -= points[2];
      points[1] = 0;
      points[2] = 0;
      this.assignPointsToUser(this.state.users[i].name, points, "")
    }
    this.setState({log: this.addLog("--- Turn changed! ---")})
  }

  render() {
    const users = []
    for(let i = 0; i < this.state.users.length; i++) {
      if(this.state.selectedUser === i){
        users.push(
          <div key={i} className="points-user points-user-selected list-group-item"
            onClick={this.selectUser.bind(this, i)}>
            <div>{this.state.users[i].name}</div>
            <PointsValues onValueSelect={(id) => {this.selectValue(id)}} values={this.state.users[i].points} selectedValue={this.state.selectedValue} />
          </div>
        )
      } else {
        users.push(
          <div key={i} className="points-user list-group-item"
            onClick={this.selectUser.bind(this, i)}>
            <div>{this.state.users[i].name}</div>
            <PointsValues onValueSelect={(id) => {this.selectValue(id)}} values={this.state.users[i].points} />
          </div>
        )
      }
    }

    const addUser = (
      <form className="points-user-add list-group-item" onSubmit={(event) => {
          event.preventDefault()
          let array = this.state.users
          array.push({name: this.state.defaultUser, points: ([this.state.defaultPoints, 0, 0])})
          this.setState({users: array})
        }}>

        <input className="points-input" type="text" list="users" placeholder="Player" defaultValue={this.state.defaultUser}
          onChange={(e) => {
            this.setState({defaultUser : e.target.value})
          }} />
        <datalist id="users">
          <option value="Juha-Matti" />
        </datalist>

        <input className="points-input" type="number" placeholder="Points" defaultValue={this.state.defaultPoints}
          onChange={(e) => { this.setState({defaultPoints : parseInt(e.target.value)}) }} />

        <input className="btn btn-success" type="submit" value="Add" />

      </form>
    )

    const tab = (
      <div className="points-tab">
        <div className="points-tab-reset btn btn-danger" onClick={() => {this.setState({users: [], log: []})}}>Reset</div>
        <div className="points-tab-turn btn btn-success" onClick={() => {this.endTurn()}}>End turn</div>
      </div>
    )

    const userPoints = (this.state.users.length > 0 ? this.state.users[this.state.selectedUser].points[this.state.selectedValue] : null)

    return (
      <div className="points list-group">
        {tab}
        <PointsChange previewValue={userPoints}
          selected={this.state.selectedValue} onChange={this.changePoints.bind(this)} />
        <div className="points-users">
          {users}
          {addUser}
        </div>
        <div>{JSON.stringify(this.state.log)}</div>
      </div>
    );
  }
}

export default Points;
