import React from "react";
import HalfPage from "./HalfPage.js";
import "../Styles/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <HalfPage>
          <h1>Estoy a la izquierda</h1>
          <p className="p">Soy el contenedor de la izquierda</p>
        </HalfPage>
        <HalfPage>
          <h1>Estoy a la derecha</h1>
          <p className="p">Soy el contenedor de la derecha</p>
        </HalfPage>
      </div>
    );
  }
}

export default App;
