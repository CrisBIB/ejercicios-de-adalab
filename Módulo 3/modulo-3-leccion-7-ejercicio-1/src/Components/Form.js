const Form = (props) => {
  const handleChange = (ev) => {
    const name = ev.currentTarget.name;
    const value = ev.currentTarget.value;
    const check = ev.currentTarget.checked;
    props.handleInputs(name, value, check);
  };

  return (
    <form className="container" action="">
      <label htmlFor="name">Nombre de la película</label>
      <input name="name" onChange={handleChange} type="text" />
      <label htmlFor="description">Descripción de la película</label>
      <textarea
        onChange={handleChange}
        name="description"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="language">Idioma de la película</label>
      <select name="language" onChange={handleChange}>
        <option value="Español">Español</option>
        <option value="Inglés">Inglés</option>
        <option value="Portugués">Portugués</option>
      </select>
      <div className="age">
        <label>Edad recomendada: </label>
        <label htmlFor="A">A</label>
        <input
          type="radio"
          name="age"
          onChange={handleChange}
          value="Todos los públicos"
        />
        <label htmlFor="B">+7</label>
        <input
          type="radio"
          name="age"
          onChange={handleChange}
          value="Mayores de 7 años"
        />
        <label htmlFor="C">+12</label>
        <input
          type="radio"
          name="age"
          onChange={handleChange}
          value="Mayores de 12 años"
        />
        <label htmlFor="D">+16</label>
        <input
          type="radio"
          name="age"
          onChange={handleChange}
          value="Mayores de 16 años"
        />
        <label htmlFor="E">+18</label>
        <input
          type="radio"
          name="age"
          onChange={handleChange}
          value="Mayores de 18 años"
        />
      </div>
      <div className="age">
        <label>Género: </label>
        <label htmlFor="comedia">Comedia</label>
        <input
          name="genres"
          type="checkbox"
          value="comedia"
          onChange={handleChange}
        />
        <label htmlFor="drama">Drama</label>
        <input
          name="genres"
          type="checkbox"
          value="drama"
          onChange={handleChange}
        />
        <label htmlFor="comedy">Terror</label>
        <input
          name="genres"
          type="checkbox"
          value="terror"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Form;
