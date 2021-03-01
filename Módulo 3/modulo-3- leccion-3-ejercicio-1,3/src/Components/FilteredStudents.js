import React from "react";
import PropTypes from "prop-types";

const StudentList = (props) => {
  console.log(props);
  const list = props.students
    //.filter((student) => student.promo === "A")
    .map((student, index) => (
      <li id={index}>
        <p>Promo: {student.promo}</p>
        <p>Nombre: {student.name}</p>
        <p>Edad: {student.age}</p>
      </li>
    ));
  return <ol>{list}</ol>;
};

//¿Por què no me funciona?
StudentList.propTypes = {
  promo: PropTypes.string,
};

StudentList.defaultProps = {
  students: [],
};

export default StudentList;
