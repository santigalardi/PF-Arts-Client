import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={props} alt={props} />
      </div>
      <div className={styles.propsContainer}>
        <h3>Name</h3>
        <p>Genres</p>
        <p>Rating:</p>
      </div>
    </div>
  );
};

export default Card;
