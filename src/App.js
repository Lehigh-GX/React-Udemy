import React, { Component } from "react";
import CardList from "./Components/Card-list/card-list";
import SearchBox from "./Components/SearchBox/searchBox";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchFiled: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monster: users }));
  }
  handleChange = (e) => {
    this.setState({ searchFiled: e.target.value });
  };
  render() {
    const { monster, searchFiled } = this.state;
    const searchMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monster={searchMonster}></CardList>
      </div>
    );
  }
}

export default App;
