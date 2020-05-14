import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box'; 
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
      this.state = {
        monsters: [],
        searchField: ""
      };
  };
  
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response.data);
        this.setState({
          monsters: response.data
        });
      })
  }
  
  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  } 
  
  render() {
    
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  };
};

export default App;
