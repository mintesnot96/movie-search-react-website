import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { Component } from "react";
import './App.css'
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchrdfield: "",
    };
  }

  onSearchchange = (event) => {
    this.setState({ searchrdfield: event.target.value });
  };
  render() {
    const filteredrobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchrdfield.toLowerCase());
    }); 
    return (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>

        <SearchBox searchChange={this.onSearchchange} />

        <CardList robots={filteredrobots} />
      </div>
    );
  }
}

export default App;
