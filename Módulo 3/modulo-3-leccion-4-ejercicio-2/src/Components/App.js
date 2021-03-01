import React from "react";
import Destiny from "./Destiny.js";
import CityImage from "./CityImage.js";

const cities = [
  {
    id: 1,
    city: "Buenos Aires",
    country: "Argentina",
  },
  {
    id: 2,
    city: "Sydney",
    country: "Australia",
  },
  {
    id: 3,
    city: "Praga",
    country: "República Checa",
  },
  {
    id: 4,
    city: "Bostón",
    country: "USA",
  },
  {
    id: 5,
    city: "Tokyo",
    country: "Japón",
  },
];

const images = {
  BuenosAires:
    "https://www.latercera.com/resizer/uov4RO7_c7r9wId6b8gnAe6TmXc=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/JQNDKHIRSFEDZM5FREIFQJLGDA.jpg",
  Sydney: "https://lp-cms-production.imgix.net/2019-06/65830387.jpg",
  Praga:
    "https://meraviglia.es/wp-content/uploads/2019/02/Cosas-a-tener-en-cuenta-en-Praga.jpg",
  Boston:
    "https://www.visittheusa.co/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2017-06/de6f732d8950b74b550d885beab53c37.jpeg?itok=AHJDbUok",
  Tokyo:
    "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/11/First-time-in-Tokyo.jpg",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "",
    };
    this.handleOptionSelected = this.handleOptionSelected.bind(this);
  }

  handleOptionSelected(value) {
    console.log("A mi también!");
    this.setState({
      selectValue: value,
    });
  }

  render() {
    console.log(this.state);
    const cityOption = cities.map((city) => {
      return <option key={city.id}>{city.city}</option>;
    });
    //const imageUrl = images[this.state.selectValue];
    //console.log(images, imageUrl);
    return (
      <div>
        <Destiny cityOptions={cities} handleSelect={this.handleOptionSelected}>
          {cityOption}
        </Destiny>
        <CityImage cityImage={images[this.state.selectValue]} />
      </div>
    );
  }
}

export default App;
