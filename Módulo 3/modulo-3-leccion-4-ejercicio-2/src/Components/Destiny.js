import React from "react";
import "../Styles/App.scss";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    let cities = this.props.cityOptions;
    const countryOption = cities.find((city) => city.city === ev.target.value);
    console.log("Me han clickado");
    this.props.handleSelect(ev.target.value);
    /* alert(
      `Tu destino es viajar a ${countryOption.country}, siendo ${ev.target.value} la ciudad seleccionada.`
    ); */
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="city">Elije a dónde quieres viajar</label>
        <select onChange={this.handleChange}>{this.props.children}</select>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default Destiny;
