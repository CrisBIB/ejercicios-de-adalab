const Card = (props) => {
  //   const genresMovie = props.genres.map((genre) => {});
  return (
    <div>
      <p>Nombre: {props.name}</p>
      <p>Descripción: {props.description}</p>
      <p>Lengua: {props.language}</p>
      <p>A parti de: {props.age} </p>
      <p>Género: {props.genres} </p>
    </div>
  );
};

export default Card;
