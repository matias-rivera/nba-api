import React from 'react';
import axios from 'axios';

import './App.css';

 class App extends React.Component {
   state = { 
     first_name:'',
     last_name:'',
     team:{}
    }

    componentDidMount(){
      
      this.fetchPlayer();
    };
    
    fetchPlayer = () => {
      const id =this.rand(1,3000);
      axios.get('https://www.balldontlie.io/api/v1/players/'+id)
        .then((response) => {
          const { first_name,last_name,team } = response.data;
        
          this.setState({first_name,last_name,team });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    rand = (min, max) => {  
      let randomNum = Math.random() * (max - min) + min;  
      return Math.floor(randomNum);}
  
    render() {
      const {first_name, last_name,team} = this.state;
      return (
        <div className="App">
          <div className="card">
            <h1 className="heading">{first_name} {last_name} </h1>
            <h2 className="heading">{team.full_name} </h2>
            <button className="button" onClick={this.fetchPlayer}>
              <span>RANDOM PLAYER</span>
            </button>
          </div>
        </div>
      );
    }
 }
  
 export default App;