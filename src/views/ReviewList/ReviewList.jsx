import styles from './ReviewList.module.css';

const ReviewList = ({ comments }) => {
  return (
    <div className={styles.container}>
      {comments.map((comment, index) => (
        <div className={styles.commentContainer} key={index}>
          <div className={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={`${styles.star} ${
                  value <= comment.rating ? styles.checked : ''
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <h4 className={styles.name}>{comment.name}</h4>
          <p className={styles.date}>{comment.date}</p>
          <p className={styles.comment}>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
