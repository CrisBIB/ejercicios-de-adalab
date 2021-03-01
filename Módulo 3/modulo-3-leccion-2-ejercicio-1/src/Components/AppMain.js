import React from "react";

class AppMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const textContent = this.props.text;
    return <p className="main">{textContent}</p>;
  }
}

export default AppMain;
