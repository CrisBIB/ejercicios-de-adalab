import React from "react";

class CityImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.cityImage);
    return <img href={this.props.cityImage} />;
  }
}

export default CityImage;
