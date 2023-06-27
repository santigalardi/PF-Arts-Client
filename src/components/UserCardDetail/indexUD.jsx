// import PropTypes from 'prop-types'; 
import style from './indexDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail } from '../../redux/actions';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userdetail = useSelector(state => state.usersdetail);


  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style.containerUserDetail}>
      <div className={style.userDetail}>
        <div className={style.galleryWrapper}>
          <div className={style.galleryScroll}>
            <div className={style.gallery}>
              <div className={style.item}>
                <img
                  //Acá después hay que jugar con cada obra de cada artista
                  src='https://www.bicaalu.com/wp-content/uploads/el_tarot_de_leonora_carrington.jpg'
                  alt='Image'
                />
              </div>
              <div className={style.item}>
                <img src='https://www.feelcats.com/wp-content/uploads/2014/11/Henrietta-Ronner_cuadro_011.jpg' alt='Image' />
              </div>
              <div className={style.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPU0TPyuimzbBY8WaUq-5AUqAd4ONhQTUd7g&usqp=CAU' alt='Image' />
              </div>
            </div>
          </div>
        </div>

        <ul className={style['details']}>

          <li>Name:{userdetail.userName}</li>
          <li>Email:{userdetail.email}</li>
          <li>UserId:{userdetail.userId}</li>
          <li>Description:{userdetail.description}</li>
          <li>Phone Number:{userdetail.phoneNumber}</li>
          <li>Country:{userdetail.location}</li>
        </ul>
      </div>
      <h1 className={style.categoryTitle}>My Categories</h1>
      <div className={style.floatbox}>
        <div className={style.item}>
          <div className={style.content}>Painting</div>
        </div>
        <div className={style.item}>
          <div className={style.content}>Illustration</div>
        </div>
      </div>
      <FontAwesomeIcon icon={faStar} className={style.starIcon} />
      <div className={style.socialIcons}></div>
      <FaTwitter className={style.shareIcon} />
      <FaFacebook className={style.shareIcon} />
      <FaInstagram className={style.shareIcon} />
      <FaPinterest className={style.shareIcon} />
      <FaYoutube className={style.shareIcon} />
    </div>
  );
};
// UserDetail.propTypes = {
//   userCardId: PropTypes.string.isRequired,
// };

export default UserDetail;


// ------------------- ESTO DE ACÁ ABAJO ES DE ALEX --------------- //
// import PropTypes from 'prop-types';
// import style from './indexDetail.module.css';
// import { getUserDetail } from '../../redux/actions';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// const dispatch = useDispatch();
// const userDetail = useSelector(state => state.userDetail);

// useEffect(() => {
//   dispatch(getUserDetail(userCardId));
// }, [dispatch, userCardId]);

// const { name ,email,userId,description, phoneNumber,location } = userDetail;

//  <li>Name:{name}</li>
//  <li>Email:{email}</li>
//  <li>UserId:{userId}</li>
//  <li>Description:{description}</li>
//  <li>Phone Number:{phoneNumber}</li>
//  <li>Country:{location}</li> 
//   )}


//FCC

  /* <li>Name:</li>
<li>Email:</li>
<li>UserId:</li>
<li>Description:</li>
<li>Phone Number:</li>
<li>Country:</li> */

