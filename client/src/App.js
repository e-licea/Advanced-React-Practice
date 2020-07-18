import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import PlayerCard from './components/PlayerCard';
import Nav from './components/Nav';
class App extends Component{
  constructor() {
    super();
    this.state ={
      players: []
    }

    console.log('lifecycle event -- constructor') //lifecycle -- constructor
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data)
      this.setState({players: res.data})
      console.log('current state: ',this.state.players) // making sure that setState logs
      console.log('lifecycle event -- componentDidMount')  //lifecycle -- componentDidMount
    })
  }
  
render() {
  console.log('lifecycle event -- render()')  //lifecycle -- render()
  return (
    <div>
      <Nav/>
      <div className="container">
       

        {
      this.state.players.map(player => (
      <PlayerCard key = {player.rank} player = {player}></PlayerCard>
      ))
      }</div>
    </div>
  )
}
}


export default App;
