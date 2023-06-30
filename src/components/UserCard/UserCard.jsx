import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './UserCard.module.css';

const UserCard = ({ user, art }) => {
  const { userName, userId, profilePicture } = user;

  return (
    <div className={styles['userCard']}>
      <img src={profilePicture} className={styles['imageU']} />
      <h3>{userName}</h3>
      <div>
        <NavLink className={styles['detailButton']} to={`/users/detail/${userId}`}>
          Detail
        </NavLink>
      </div>
      <p className={styles['artworks']}>
        Artworks <sup className={styles['expo']}>6</sup>
      </p>
    </div>
  );
};
UserCard.propTypes = {
  // id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserCard;
