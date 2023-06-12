import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postArts } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./Form.module.css";

export default function Form() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    title: "",
    image: "",
    artistName: "",
    completionYear: "",
    width: "",
    height: "",
    description: "",

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; //Enlaces e historial de navegacion.
import { postArts } from '../../redux/actions';
import { useDispatch } from 'react-redux'; //Despacho acciones.
import styles from './Form.module.css';

function validate(input) {
  //Validaciones
  let errors = {};
  if (!input.title) {
    errors.title = 'Need a title';
  }
  if (!input.image) {
    errors.image = 'Need an image URL';
  }
  if (!input.artistName) {
    errors.artistName = 'Need a artist name';
  }
  if (!input.completitionYear) {
    errors.completitionYear = 'Need a year';
  }
  if (!input.width) {
    errors.width = 'Need a width';
  }
  if (!input.height) {
    errors.height = 'Need a height';
  }

  return errors;
}

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); //almacena errores de validaciones del formu.
  const [input, setInput] = useState({
    //almacena valores.
    title: '',
    image: '',
    artistName: '',
    completitionYear: '',
    width: '',
    height: '',

  });
  const [submitted, setSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  function validate(input) {
    let errors = {};
    if (!input.title) {
      errors.title = "Need a title";
    }
    if (!input.image) {
      errors.image = "Need an image URL";
    }
    if (!input.artistName) {
      errors.artistName = "Need an artist name";
    }
    if (!input.completionYear) {
      errors.completionYear = "Need a year";
    }
    if (!input.width) {
      errors.width = "Need a width";
    }
    if (!input.height) {
      errors.height = "Need a height";
    }
    return errors;
  }

  function handleChange(event) {
    setInput({
      ...input,

      [e.target.name]: e.target.value,

      [event.target.name]: event.target.value,

    });
    setErrors(
      validate({
        ...input,

        [e.target.name]: e.target.value,

        [event.target.name]: event.target.value,

      })
    );
    setShowAlert(false);
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
      input.completionYear &&
      input.width &&
      input.height
    ) {

    if (Object.keys(errors).length === 0 && input.title && input.image && input.artistName && input.completitionYear && input.width && input.height) {

      const updatedInput = {
        ...input,
      };
      dispatch(postArts(updatedInput));
      setShowConfirmation(true);
      setInput({

        title: "",
        image: "",
        artistName: "",
        completionYear: "",
        width: "",
        height: "",

        title: '',
        image: '',
        artistName: '',
        completitionYear: '',
        width: '',
        height: '',

      });
      setSubmitted(false);
      setErrors({});
      navigate('/home');
    } else {
      setShowAlert(true);
    }
  }

  function handleScrollButton() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const bodyHeight = document.body.offsetHeight;
      const isBottom = scrollY >= bodyHeight - windowHeight;

      setShowScrollButton(isBottom);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>

      <Link to="/home">
        <button className={`${styles.button} ${styles.homeButton}`}>
          Home
        </button>
      </Link>
      <div className={styles.container}>
        <h1 className={styles.heading}>Create a new art!</h1>
        <form onSubmit={handleSubmit}>
          {showAlert && Object.keys(errors).length > 0 && (
            <p className={styles.error}>Please fill out all required fields.</p>
          )}
          <div className={styles.formGroup}>
            <label className={styles.label}>Title: </label>
            <input
              type="text"
              value={input.title}
              name="title"
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter a title"
            />
            {errors.title && <p className={styles.error}>{errors.title}</p>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Image: </label>
            <input
              type="text"
              value={input.image}
              name="image"
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter an image URL"
            />
            {submitted && errors.image && (
              <p className={styles.error}>{errors.image}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Artist name: </label>
            <input
              type="text"
              value={input.artistName}
              name="artistName"
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter an artist name"
            />
            {submitted && errors.artistName && (
              <p className={styles.error}>{errors.artistName}</p>
            )}

      <Link to='/home'>
        <button className='button'>Home</button>
      </Link>
      <h1>Create a new Art!</h1>
      <div className={styles['container']}>
        <form onSubmit={handleSubmit}>
          {showAlert && Object.keys(errors).length > 0 && <p className='error'>Please fill out all required fields.</p>}
          <div>
            <label>Title: </label>
            <input type='text' value={input.title} name='title' onChange={handleChange} />
            {errors.title && <p className='error'>{errors.title}</p>}
          </div>
          <div>
            <label>Image: </label>
            <input type='text' value={input.image} name='image' onChange={handleChange} />
            {submitted && errors.image && <p className='error'>{errors.image}</p>}
          </div>
          <div>
            <label>Artist name: </label>
            <input type='text' value={input.artistName} name='artistName' onChange={handleChange} />

          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Year: </label>
            <input

              type="text"
              value={input.completionYear}
              name="completionYear"

              type='text' // Lo puedo cambiar a "number"
              value={input.completitionYear}
              name='completitionYear'

              onChange={handleChange}
              className={styles.input}
              placeholder="Enter a year"
            />
            {submitted && errors.completionYear && (
              <p className={styles.error}>{errors.completionYear}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Width: </label>
            <input
              type="number"
              value={input.width}
              name="width"
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter a width"
            />
            {submitted && errors.width && (
              <p className={styles.error}>{errors.width}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Height: </label>
            <input
              type="number"
              value={input.height}
              name="height"
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter a height"
            />
            {submitted && errors.height && (
              <p className={styles.error}>{errors.height}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Description: </label>
            <textarea
              value={input.description}
              name="description"
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Enter a description..."
            />
          </div>
          <button type="submit" className={styles.button}>
            Create
          </button>
          {showConfirmation && (
            <p className={styles.confirmation}>Art created successfully!</p>
          )}

          <div>
            <label>Width: </label>
            <input type='text' value={input.width} name='width' onChange={handleChange} />
          </div>
          <div>
            <label>Height: </label>
            <input type='text' value={input.height} name='height' onChange={handleChange} />
          </div>

          <button className='button' type='submit'>
            Create
          </button>
          {showConfirmation && <p className='confirmation'>Art created successfully!</p>}

        </form>
      </div>
      {showScrollButton && (
        <button
          className={styles.scrollButton}
          onClick={handleScrollButton}
        ></button>
      )}
    </div>
  );
}
