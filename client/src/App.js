import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './components/PlayersList'



class App extends Component {
  constructor(){
    super()
    this.state={
      input:[]
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/api/players`)
    .then(response => {
      console.log(`main`, response.data)
      this.setState({
        input: response.data
      })
    })
    .catch(err => (console.log(`help me!`, err)))
    
  }


  render(){
    if(!this.state.input.length){
      return(
        <h2>Loading the data..</h2>
      )
    }
  return (
    <div className="App">
      <header className="App-header">
      
      <PlayerList newData={this.state.input}/>
      

      </header>
    </div>
  );
  }
}

export default App;
