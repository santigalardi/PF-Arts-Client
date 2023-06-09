import { useState } from "react";
// import { Link, useHistory } from "react-router-dom"; //Enlaces e historial de navegacion.
import { Link } from "react-router-dom";
import { postArts } from "../../redux/actions";
import { useDispatch } from "react-redux"; //Despacho acciones.
import "./Form.css";

function validate(input) {
  //Validaciones
  let errors = {};
  if (!input.title) {
    errors.title = "Need a title";
  }
  if (!input.image) {
    errors.image = "Need an image URL";
  }
  if (!input.artistName) {
    errors.artistName = "Need a artist name";
  }
  if (!input.completitionYear) {
    errors.completitionYear = "Need a year";
  }
  if (!input.width) {
    errors.width = "Need a width";
  }
  if (!input.height) {
    errors.height = "Need a height";
  }

  return errors;
}

export default function Form() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [errors, setErrors] = useState({}); //almacena errores de validaciones del formu.
  const [input, setInput] = useState({
    //almacena valores.
    title: "",
    image: "",
    artistName: "",
    completitionYear: "",
    width: "",
    height: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false); //Alerta que no completó
  const [showConfirmation, setShowConfirmation] = useState(false); // Alerta de confirmación

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setShowAlert(false); // Oculta el mensaje de error general
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(input);
    setErrors(errors);
    setSubmitted(true);

    if (
      Object.keys(errors).length === 0 &&
      input.title &&
      input.image &&
      input.artistName &&
      input.completitionYear &&
      input.width &&
      input.height
    ) {
      const updatedInput = {
        ...input,
      };
      dispatch(postArts(updatedInput));
      setShowConfirmation(true); // Mostra confirmación
      // Restablece el formulario

      setInput({
        title: "",
        image: "",
        artistName: "",
        completitionYear: "",
        width: "",
        height: "",
      });

      setSubmitted(false);
      setErrors({});
    } else {
      setShowAlert(true);
    }
  }

  return (
    <div>
      <Link to="/home">
        <button className="button">Home</button>
      </Link>
      <h1>Create a new art!</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {showAlert && Object.keys(errors).length > 0 && (
            <p className="error">Please fill out all required fields.</p>
          )}
          <div>
            <label>Title: </label>
            <input
              type="text"
              value={input.title}
              name="title"
              onChange={handleChange}
            />
            {errors.title && <p className="error">{errors.title}</p>}
          </div>
          <div>
            <label>Image: </label>
            <input
              type="text"
              value={input.image}
              name="image"
              onChange={handleChange}
            />
            {submitted && errors.image && (
              <p className="error">{errors.image}</p>
            )}
          </div>
          <div>
            <label>Artist name: </label>
            <input
              type="text"
              value={input.artistName}
              name="artistName"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Year: </label>
            <input
              type="text" // Lo puedo cambiar a "number"
              value={input.completitionYear}
              name="completitionYear"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Width: </label>
            <input
              type="text"
              value={input.width}
              name="width"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Height: </label>
            <input
              type="text"
              value={input.height}
              name="height"
              onChange={handleChange}
            />
          </div>

          <button className="button" type="submit">
            Create
          </button>
          {showConfirmation && (
            <p className="confirmation">Art created successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
}
