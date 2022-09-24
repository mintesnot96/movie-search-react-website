import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { Component } from "react";
import './App.css'
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchrdfield: "",
    };
  }

  onSearchchange = (event) => {
    this.setState({ searchrdfield: event.target.value });
  };

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots: users}));
}

  render() {
    const filteredrobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchrdfield.toLowerCase());
    }); 
   
   if(this.state.robots.length==0){
    return (
      <h1 className="tc">
        Loading...
      </h1>
    );

   }
    else{return (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>

        <SearchBox searchChange={this.onSearchchange} />

        <CardList robots={filteredrobots} />
      </div>
    );}
  }
}

export default App;
