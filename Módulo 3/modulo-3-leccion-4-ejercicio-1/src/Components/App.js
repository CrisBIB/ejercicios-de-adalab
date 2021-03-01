import React from "react";
import OnionHeater from "./OnionHeater.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <OnionHeater word="cebolla" />;
  }
}

export default App;
