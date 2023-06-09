import { useState } from 'react';
import { postArts } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import {
  FaUser,
  FaArrowsAltH,
  FaArrowsAltV,
  FaDollarSign,
} from 'react-icons/fa';
import styles from './Form.module.css';

export default function Form() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    title: '',
    authorName: '',
    image: '',
    date: '',
    height: '',
    width: '',
    price: '',
    category: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  function validate(input) {
    let errors = {};
    if (!input.title) {
      errors.title = 'Need a title';
    }

    if (!input.authorName) {
      errors.authorName = 'Need an author name';
    }
    if (!input.date) {
      errors.date = 'Need a year';
    }
    if (!input.width) {
      errors.width = 'Need a width';
    }
    if (!input.height) {
      errors.height = 'Need a height';
    }
    if (!input.price) {
      errors.price = 'Need a price';
    }
    if (!input.category) {
      errors.category = 'Need a category';
    }
    return errors;
  }

  function handleChange(e) {
    if (e.target.name === 'title') {
      const title = e.target.value;
      const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
      setInput({
        ...input,
        title: capitalizedTitle,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    const errors = validate(input);
    setErrors(errors);
    setSubmitted(true);
  
    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append('title', input.title);
      formData.append('authorName', input.authorName);
      formData.append('date', input.date);
      formData.append('width', input.width);
      formData.append('height', input.height);
      formData.append('price', input.price);
      formData.append('category', input.category);
      formData.append('image', input.image);
  
      dispatch(postArts(formData));
      setShowConfirmation(true);
      setInput({
        title: '',
        image: '',
        authorName: '',
        date: '',
        width: '',
        height: '',
        price: '',
        category: '',
      });
      setSubmitted(false);
      setErrors({});
    } else {
      setShowAlert(true);
    }
  }
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setInput({ ...input, image: file });
  };

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.heading}>Create a new art!</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {showAlert && Object.keys(errors).length > 0 && (
            <p className={styles.error}>Please fill out all required fields.</p>
          )}
          <div className={styles.formGroup}>
            <label className={styles.label}>Title: </label>
            <input
              type='text'
              value={input.title}
              name='title'
              onChange={handleChange}
              className={styles.input}
              placeholder='Enter a title'
            />
            {errors.title && <p className={styles.error}>{errors.title}</p>}
          </div>
          <div className={styles.separator}></div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Image:</label>
            <input
              type='file'
              name='image'
              accept='image/*'
              onChange={handleImageChange}
            />
            {input.image && <p className={styles.fileInfo}>Selected file</p>}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.labelImageURL}> or image URL: </label>
            <input
              type='text'
              value={input.image}
              name='image'
              onChange={handleChange}
              className={styles.inputImageURL}
              placeholder='Enter an image URL'
            />
          </div>
          <div className={styles.separator}></div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Author: </label>
            <input
              type='text'
              value={input.authorName}
              name='authorName'
              onChange={handleChange}
              className={styles.input}
              placeholder='Enter an author name'
            />
            {submitted && errors.authorName && (
              <p className={styles.error}>{errors.authorName}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Year: </label>
            <input
              type='number'
              value={input.date}
              name='date'
              onChange={handleChange}
              className={styles.input}
              placeholder='Enter a year'
            />
            {submitted && errors.date && (
              <p className={styles.error}>{errors.date}</p>
            )}
          </div>
          <div className={styles.separator}></div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              {' '}
              <FaArrowsAltH className={`${styles.icon} icon`} /> Width:{' '}
            </label>
            <input
              type='number'
              value={input.width}
              name='width'
              onChange={handleChange}
              className={styles.input}
              placeholder='Enter a width'
            />
            {submitted && errors.width && (
              <p className={styles.error}>{errors.width}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <FaArrowsAltV className={`${styles.icon} icon`} /> Height:{' '}
            </label>
            <input
              type='number'
              value={input.height}
              name='height'
              onChange={handleChange}
              className={styles.input}
              placeholder='Enter a height'
            />
            {submitted && errors.height && (
              <p className={styles.error}>{errors.height}</p>
            )}
          </div>
          <div className={styles.separator}></div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              {' '}
              <FaDollarSign className={`${styles.icon} icon`} /> Price:{' '}
            </label>
            <input
              type='number'
              value={input.price}
              name='price'
              onChange={handleChange}
              className={styles.input}
              placeholder='Enter a price'
            />
            {submitted && errors.price && (
              <p className={styles.error}>{errors.price}</p>
            )}
          </div>
          <div className={styles.separator}></div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Category:
            </label>
            <select
              value={input.category}
              name='category'
              onChange={handleChange}
              className={styles.input}
              placeholder='Select a category'
            >
              <option value=''>Select a category</option>
              {['Painting', 'Illustration', '3D', 'Collage', 'Pixel Art', 'Photography'].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {submitted && errors.category && (
              <p className={styles.error}>{errors.category}</p>
            )}
          </div>
          <button type='submit' className={styles.button}>
            Create
          </button>
          {showConfirmation && (
            <p className={styles.confirmation}>Art created successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
}