import React from "react";

class HalfPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span>{this.props.children}</span>;
  }
}

export default HalfPage;
