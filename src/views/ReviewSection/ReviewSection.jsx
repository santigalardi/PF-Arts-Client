import { useState } from 'react';
import ReviewList from '../ReviewList/ReviewList';
import styles from './ReviewSection.module.css';

const ReviewSection = () => {
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const addComment = () => {
    const newComment = {
      name: name,
      email: email,
      comment: comment,
      rating: rating,
      date: new Date().toLocaleDateString(), // Agrega la fecha actual al comentario
    };
    setComments([...comments, newComment]);
    setName('');
    setEmail('');
    setComment('');
    setRating(0);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment();
  };

  const handleCommentChange = (e) => {
    const value = e.target.value;
    if (value.length <= 150) {
      setComment(value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.separator}></div>
        <h4>Reviews</h4>
        <div className={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={`${styles.ratingStar} ${
                value <= rating ? styles.ratingStarActive : ''
              }`}
              onClick={() => handleRatingChange(value)}
            >
              ★
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type='text'
              className={styles.input}
              id='name'
              placeholder='Your Name*'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type='email'
              className={styles.input}
              id='email'
              placeholder='email@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              className={styles.textarea}
              id='comment'
              placeholder='Review*'
              rows='2'
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <button type='submit' className={styles.submitButton}>
            Submit
          </button>
        </form>
        <ReviewList comments={comments} />
      </div>
    </div>
  );
};

export default ReviewSection;
