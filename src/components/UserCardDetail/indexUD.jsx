// import PropTypes from 'prop-types'; 
import style from './indexDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const [userCardDetail, setUserCardDetail]=useState(false)
  const userdetail = useSelector(state => state.usersdetail);
  const allUsers = useSelector(state => state.allUsers);

  useEffect(() => {
    const currentUser = allUsers.find(user => user.userId === userId);
    setUserCardDetail(currentUser);
  }, [userId, allUsers])

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, userId]);

  // console.log(getUserDetail)

  return (
    <div className={style.containerUserDetail}>
        <NavLink className={style['BttBack']} to='/users'>
        {' '}
        ← BACK{' '}
      </NavLink>
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

          <li>Name:{userCardDetail?.userName||'N/A'}</li>
          <li>Email:{userdetail?.email||'N/A'}</li>
          <li>UserId:{userdetail?.userId||'N/A'}</li>
          <li>Description:{userdetail?.description||'N/A'}</li>
          <li>PhoneNumber:{userdetail?.phoneNumber||'N/A'}</li>
          <li>Country:{userdetail?.location||'N/A'}</li>
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

