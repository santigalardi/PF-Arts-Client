import { useState /* useEffect */ } from 'react';
import { /* useSelector */ useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

function Card({ art }) {
  const dispatch = useDispatch();
  const { image } = art;

  const [isFav, setIsFav] = useState(false);
  // const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = (event) => {
    event.preventDefault(); // Detenemos el comportamiento predeterminado del enlace NavLink
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(art));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ art }));
    }
  };

  /*   useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.title === title) {
        setIsFav(true);
      }
    });
  }, [title, myFavorites]); */

  return (
    <div className={styles['cardContainer']}>
      {isFav ? (
        <button className={styles['likeStyle']} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={styles['likeStyle']} onClick={handleFavorite}>
          🤍
        </button>
      )}
      <div className={styles['imgContainer']}>
        <img src={image} alt={'pic'} />
      </div>
      <div className={styles['propsContainer']}>
        {/* <h2>{title}</h2>
        <p>{authorName}</p>
        <p>{date}</p> */}
      </div>
    </div>
  );
}

Card.propTypes = {
  art: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
