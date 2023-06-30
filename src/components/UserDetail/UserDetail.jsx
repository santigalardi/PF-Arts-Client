import { FaTwitter, FaFacebook, FaInstagram, FaPinterest} from 'react-icons/fa';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getAllArts, getDetail } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CarruselUsers from '../CarruselUsers/CarruselUsers';
import style from './UserDetail.module.css';

const UserDetail = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);//usuaro
  const artworkId = useSelector((state)=> state.allArts);//obras

  const userDetail = allUsers.find((user) => user.userId === userId);//datos del usuario
  // const artworkIdArray = Array.isArray(artworkId) ? artworkId : [];
  const filteredArtworks = artworkId.filter((artwork) => artwork.userId === userId);//si la obra coincide con el Id


  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllArts());
    dispatch(getDetail())
  }, [dispatch, userId]);

  const imagesDefault = ['https://www.bicaalu.com/wp-content/uploads/el_tarot_de_leonora_carrington.jpg',
  'https://www.feelcats.com/wp-content/uploads/2014/11/Henrietta-Ronner_cuadro_011.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPU0TPyuimzbBY8WaUq-5AUqAd4ONhQTUd7g&usqp=CAU',
  'https://i0.wp.com/hotbook.mx/wp-content/uploads/2014/10/hotbook-94.jpg?fit=1024%2C768&ssl=1',
  'https://i0.wp.com/arteyalgomas.com/wp-content/uploads/2020/01/Van_Gogh.-Campo-de-trigo-con-cuervos.-1890.jpg?resize=1140%2C713&ssl=1',
  'https://i.pinimg.com/originals/fd/65/c5/fd65c5b4d77549893ee645706e30605c.jpg' ];
  //para elegir que se va ver en el carrusel
  const images = filteredArtworks.length > 0 ? filteredArtworks.map((artwork) => artwork.image) : imagesDefault;

  //enlaces para las redes
  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      // eslint-disable-next-line no-undef
      window.location.href
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
  const handlePinterestShare = () => {
    const url = `https://www.pinterest.com/?url=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className={style['containerUserDetail']}>
      <NavLink className={style['BttBack']} to='/users'>
        {' '}
        ← BACK{' '}
      </NavLink>
      <div className={style['userDetail']}>
        <ul className={style['details']}>
          <li>Name: {userDetail?.userName || '--'}</li>
          <li>Email: {userDetail?.email || '--'}</li>
          <li>Description: {userDetail?.description || '--'}</li>
          <li>Phone Number: {userDetail?.phoneNumber || '--'}</li>
          <li>Country: {userDetail?.location || '--'}</li>
        </ul>
        <div className={style['positionPhoto']}>
          {userDetail?.profilePicture && (
            <img src={userDetail.profilePicture} alt="img" className={style['photoPerfil']} />
            )}
        </div>
        <div className={style['socialIcons']}>
              <FaTwitter className={style['shareIcon']} onClick={handleTwitterShare} />
              <FaFacebook className={style['shareIcon']} onClick={handleFacebookShare} />
              <FaInstagram className={style['shareIcon']} onClick={handleInstagramShare} />
              <FaPinterest className={style['shareIcon']}  onClick={handlePinterestShare} />
        </div>
      </div>
        <div>
          <CarruselUsers images={images} />
        </div>
    </div>
  );
};

export default UserDetail;
