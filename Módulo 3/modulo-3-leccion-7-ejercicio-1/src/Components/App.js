import "../Styles/App.scss";
import Form from "./Form";
import Card from "./Card";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [age, setAge] = useState("");
  const [genres, setGenres] = useState([]);

  const handleChange = (name, value, check) => {
    console.log(name, value, check);
    if (name === "name") {
      setName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "language") {
      setLanguage(value);
    } else if (name === "age") {
      setAge(value);
    } else {
      /* if (check && genres.length < 3) {
        setGenres([...genres, value]); */
      if (!genres.includes(value) && check) {
        setGenres([...genres, value]);
      } else if (genres.includes(value) && !check) {
        const indexValue = genres.findIndex((genre) => genre === value);
        setGenres(genres.splice(indexValue, 1));
        console.log(genres);
      }
    }
  };

  return (
    <div className="container">
      <Form handleInputs={handleChange} />
      <Card
        name={name}
        description={description}
        language={language}
        age={age}
        genres={genres}
      />
    </div>
  );
};

export default App;
