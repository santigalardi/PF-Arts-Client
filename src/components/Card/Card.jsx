import { useState, useEffect } from 'react';
import './Card.style.css';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import PropTypes from 'prop-types';

function Card({ user }) {
  const { name, email, phone } = user;
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(user));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ user }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.name === name) {
        setIsFav(true);
      }
    });
  }, [name, myFavorites]);

  return (
    <div className='CarComponents'>
      {isFav ? (
        <button className='likeStyle' onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className='likeStyle' onClick={handleFavorite}>
          🤍
        </button>
      )}
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
