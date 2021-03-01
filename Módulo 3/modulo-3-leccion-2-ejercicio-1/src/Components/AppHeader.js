import React from "react";
import logo from "../Images/logo.svg";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const userName = this.props.name;
    const actualDate = this.props.date;
    return (
      <header className="AppHeader">
        <img src={logo} className="logo-Ej1" alt="logo" />
        <div>
          <h1 className="name">{userName}</h1>
          <h2 className="date">{actualDate}</h2>
        </div>
      </header>
    );
  }
}

export default AppHeader;
