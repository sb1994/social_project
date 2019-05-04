import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  componentDidMount() {
    axios
      .get("/api/users/test")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <p>this is my react app</p>
        </div>
      </div>
    );
  }
}

export default App;
