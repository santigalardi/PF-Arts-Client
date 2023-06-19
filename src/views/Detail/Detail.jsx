import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addFavorite, clearDetail, deleteFavorite, getDetail, deleteArt, getAllArts } from '../../redux/actions';
import { FaShoppingCart, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Loader from '../../components/Loader/Loader';
import frame from './pngegg.png';
import styles from './Detail.module.css';
import {
  FaShoppingCart,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPencilAlt,
} from 'react-icons/fa';
import frame from './pngegg.png';

const Detail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const [isFav, setIsFav] = useState(false);
  const [rating, setRating] = useState(0);
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [price, setPrice] = useState('');
  const detail = useSelector((state) => state.detail);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getDetail(id)).finally(() => {
      setIsLoading(false);
    });

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

  useEffect(() => {
    setArtist(detail.authorName);
    setYear(detail.date);
    setDimensions(`${detail.width} x ${detail.height}`);
    setPrice(detail.price);
  }, [detail]);

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

  const handleDelete = () => {
    dispatch(deleteArt(detail.id));
    window.alert('Artwork deleted successfully');
  };

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedArtwork = {
      ...detail,
      authorName: artist,
      date: year,
      width: dimensions.split(' x ')[0],
      height: dimensions.split(' x ')[1],
      price: price,
    };
    dispatch(updateArtwork(detail.id, updatedArtwork))
      .then((response) => {
        console.log('Artwork updated successfully:', response.data);
        setIsEditing(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error updating artwork:', error);
        window.alert('Error updating artwork. Please try again.');
      });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  function homeButton() {
    dispatch(getAllArts());
    navigate('/');
  }

  if (!detail) {
    return <div>Loading...</div>;
  }

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(detail.title)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const handleInstagramShare = () => {
    const url = `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  if (isLoading || !detail) {
    return <Loader />;
  }
  const isCreatedByUser = detail.user && detail.user.userName.length > 0;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.frameContainer}>
          <div className={styles.frame}>
            <img src={frame} alt='' />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={detail.image} alt={detail.title} onLoad={() => setIsLoading(false)} />
        </div>
      </div>
      <div className={styles.propsContainer}>
        <h3>{detail.title}</h3>
        <hr className={styles.hr} />
        <p>
          <span>Artist:</span>{' '}
          {isEditing ? (
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          ) : (
            <span>{detail.authorName}</span>
          )}
        </p>
        <p>
          <span>Year:</span>{' '}
          {isEditing ? (
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          ) : (
            <span>{detail.date}</span>
          )}
        </p>
        <p>
          <span>Dimensions:</span>{' '}
          {isEditing ? (
            <input
              type="text"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
            />
          ) : (
            <span>
              {detail.width} x {detail.height}
            </span>
          )}
        </p>
        <p>
          <span>Price:</span>{' '}
          {isEditing ? (
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          ) : (
            <span>{detail.price} M</span>
          )}
        </p>
        {isCreatedByUser && (
          <div>
            <p>
              <span>Published By:</span>{' '}
              <Link to="/users" className={styles.user}>
                {detail.user.userName}
              </Link>
            </p>
          </div>
        )}
        <div>
          {isEditing ? (
            <>
              <button className={styles.updateButton} onClick={handleSave}>
                Save
              </button>
              <button className={styles.updateButton} onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            isCreatedByUser && (
              <button
                className={`${styles.updateButton} ${styles.editButton}`}
                onClick={handleUpdate}
              >
                <FaPencilAlt className={styles.updateIcon} />
              </button>
            )
          )}
          {isEditing && isCreatedByUser && (
            <button
              className={styles.deleteButton}
              onClick={() => {
                handleDelete();
                homeButton();
              }}
            >
              Delete
            </button>
          )}
        </div>
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
              <button key={value} className={`${styles.ratingStar} ${value <= rating ? styles.ratingStarActive : ''}`} onClick={() => handleRatingChange(value)}>
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
