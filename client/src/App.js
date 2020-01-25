import React from "react";
import axios from "axios";
import PlayersCard from "./component/PlayersCard";
import Navbar from "./component/Navbar";
import "./App.css";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
        this.setState({ ...this.state, players: res.data });
      })
      .catch(err => console.log("error on axios", err));
  }

  render() {
    return (
      <div>
        {" "}
        <div>
          <Navbar />
        </div>
        <div>
          {this.state.players.map(player => (
            <PlayersCard
              name={player.name}
              country={player.country}
              searches={player.searches}
              id={player.id}
              key={player.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
