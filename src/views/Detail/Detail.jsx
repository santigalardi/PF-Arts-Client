import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addFavorite,
  clearDetail,
  deleteFavorite,
  getDetail,
} from '../../redux/actions';
import styles from './Detail.module.css';
import {
  FaShoppingCart,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const Detail = () => {
  const { id } = useParams();
  const [isFav, setIsFav] = useState(false);
  const [rating, setRating] = useState(0);
  const detail = useSelector((state) => state.detail);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === detail.id) {
        setIsFav(true);
      }
    });
  }, [detail.id, myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(detail));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ detail }));
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  if (!detail) {
    return <div>Loading...</div>;
  }

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      detail.title
    )}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(url, '_blank');
  };

  const handleInstagramShare = () => {
    const url = `https://www.instagram.com/?url=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.detailContainer}>
      <div className={styles.imgContainer}>
        <img src={detail.image} alt={detail.title} />
      </div>
      <div className={styles.propsContainer}>
        <h3>{detail.title}</h3>
        <p>Artist: {detail.authorName}</p>
        <p>Year: {detail.date}</p>
        <p>
          Dimensions: {detail.width} x {detail.height}
        </p>
        {detail.user && detail.user.userName.length > 0 ? (
          <div>
            <p>Author: {detail.user.userName}</p>
          </div>
        ) : null}
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
          <button className={styles.shareButton} onClick={handleTwitterShare}>
            <FaTwitter className={styles.shareIcon} />
          </button>
          <button className={styles.shareButton} onClick={handleFacebookShare}>
            <FaFacebook className={styles.shareIcon} />
          </button>
          <button className={styles.shareButton} onClick={handleInstagramShare}>
            <FaInstagram className={styles.shareIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
