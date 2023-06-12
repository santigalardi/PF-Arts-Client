//Este es un ejemplo de cómo quedaría
//Poner funciones con la api
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Detail.module.css';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import {
  FaShoppingCart,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const Detail = () => {
  const artwork = {
    id: '57727444edc2cb3880cb7bf6',
    title: 'Mona Lisa',
    artistName: 'Leonardo da Vinci',
    completionYear: 1519,
    width: 403,
    image:
      'https://uploads0.wikiart.org/00339/images/leonardo-da-vinci/mona-lisa-c-1503-1519.jpg!Large.jpg',
    height: 600,
  };

  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [rating, setRating] = useState(0);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(artwork));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ artwork }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === artwork.id) {
        setIsFav(true);
      }
    });
  }, [artwork.id, myFavorites]);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  function handleScrollButton() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.imgContainer}>
        <img src={artwork.image} alt={artwork.title} />
      </div>
      <div className={styles.propsContainer}>
        <h3>{artwork.title}</h3>
        <p>Artist: {artwork.artistName}</p>
        <p>Year: {artwork.completionYear}</p>
        <p>
          Dimensions: {artwork.width} x {artwork.height}
        </p>
      </div>
      <div className={styles.actionsContainer}>
        {isFav ? (
          <button className={styles.likeStyle} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.likeStyle} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button className={styles.cartButton}>
          <FaShoppingCart className={styles.cartIcon} />
          Add to Cart
        </button>
        <div>
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
        </div>
        <div className={styles.shareButtons}>
          <button className={styles.shareButton}>
            <FaTwitter className={styles.shareIcon} />
          </button>
          <button className={styles.shareButton}>
            <FaFacebook className={styles.shareIcon} />
          </button>
          <button className={styles.shareButton}>
            <FaInstagram className={styles.shareIcon} />
          </button>
        </div>
      </div>
      {showScrollButton && (
        <button
          className={styles.scrollButton}
          onClick={handleScrollButton}
        ></button>
      )}
    </div>
  );
};

export default Detail;
