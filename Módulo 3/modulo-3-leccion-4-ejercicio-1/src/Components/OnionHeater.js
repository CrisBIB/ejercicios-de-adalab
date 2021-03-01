import React from "react";
import "../Styles/OnionHeater.scss";

/* const OnionHeater = () => {}; */

class OnionHeater extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    if (ev.target.value.includes(this.props.word)) {
      alert("ODIO LA CEBOLLA!!!");
    }
    this.forceUpdate();
  }
  render() {
    return (
      <div className="ingredientsContainer">
        <label htmlFor="text">Escribe aquí tu lista de ingredientes</label>
        <textarea name="text" id="text" onChange={this.handleChange}></textarea>
      </div>
    );
  }
}

export default OnionHeater;
