import React from "react";
import StudentList from "./FilteredStudents.js";

const students = [
  {
    promo: "A",
    name: "Sofía",
    age: 20,
  },
  {
    promo: "B",
    name: "María",
    age: 21,
  },
  {
    promo: "A",
    name: "Lucía",
    age: 22,
  },
  {
    name: "Carmen Cristina",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pintar resultado ejercicio:</h1>
        <StudentList students={students} />
      </div>
    );
  }
}

export default App;
