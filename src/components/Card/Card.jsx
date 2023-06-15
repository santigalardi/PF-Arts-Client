import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

function Card({ art }) {
  const dispatch = useDispatch();
  const { title, artistName, completitionYear, image } = art;

  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(art));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ art }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.title === title) {
        setIsFav(true);
      }
    });
  }, [title, myFavorites]);

  return (
    <div className={styles['cardContainer']}>
      {isFav ? (
        <button className='likeStyle' onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className='likeStyle' onClick={handleFavorite}>
          🤍
        </button>
      )}
      <div className={styles['imgContainer']}>
        <img src={image} alt={title} />
      </div>
      <div className={styles['propsContainer']}>
        <h2>{title}</h2>
        <p>{artistName}</p>
        <p>{completitionYear}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  art: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    completitionYear: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
