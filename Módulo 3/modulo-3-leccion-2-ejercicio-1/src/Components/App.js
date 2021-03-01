import React from "react";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";
import "../Styles/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <AppHeader name="Cristina Blanco" date="15 de febrero de 2021" />
        <AppMain
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nemo
        doloremque nesciunt quaerat, a quidem deleniti voluptatum at veritatis
        tempore, aliquid corporis! Debitis voluptas ipsum corrupti iste
        explicabo quia natus!"
        />
        <AppFooter />
      </div>
    );
  }
}
export default App;
