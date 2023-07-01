import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllUsers,
  getAllArts,
  getDetail,
  updateUser,
} from '../../redux/actions';
import { useParams } from 'react-router-dom';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPencilAlt,
} from 'react-icons/fa';
import CarruselUsers from '../CarruselUsers/CarruselUsers';
import style from './UserDetail.module.css';

const UserDetail = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers); //usuario
  const artworkId = useSelector((state) => state.allArts); //obras
  const [isEditing, setIsEditing] = useState(false);
  const userDetail = allUsers.find((user) => user.userId === userId); //datos del usuario
  // const artworkIdArray = Array.isArray(artworkId) ? artworkId : [];
  const filteredArtworks = artworkId.filter(
    (artwork) => artwork.userId === userId
  ); //si la obra coincide con el Id

  const [editedData, setEditedData] = useState({
    //Estado local para editar datos personales.
    name: userDetail?.userName || '',
    description: userDetail?.description || '',
    phoneNumber: userDetail?.phoneNumber || '',
    location: userDetail?.location || '',
    fb: userDetail?.fb || '',
    tw: userDetail?.tw || '',
    ig: userDetail?.ig || '',
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      // Llama a la acción updateUser y pasa los datos actualizados
      await dispatch(updateUser(editedData));
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllArts());
    dispatch(getDetail());
  }, [dispatch, userId]);

  const imagesDefault = [
    'https://www.bicaalu.com/wp-content/uploads/el_tarot_de_leonora_carrington.jpg',
    'https://www.feelcats.com/wp-content/uploads/2014/11/Henrietta-Ronner_cuadro_011.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPU0TPyuimzbBY8WaUq-5AUqAd4ONhQTUd7g&usqp=CAU',
    'https://i0.wp.com/hotbook.mx/wp-content/uploads/2014/10/hotbook-94.jpg?fit=1024%2C768&ssl=1',
    'https://i0.wp.com/arteyalgomas.com/wp-content/uploads/2020/01/Van_Gogh.-Campo-de-trigo-con-cuervos.-1890.jpg?resize=1140%2C713&ssl=1',
    'https://i.pinimg.com/originals/fd/65/c5/fd65c5b4d77549893ee645706e30605c.jpg',
  ];
  //para elegir que se va ver en el carrusel
  const images =
    filteredArtworks.length > 0
      ? filteredArtworks.map((artwork) => artwork.image)
      : imagesDefault;

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

  return (
    <div className={style['containerUserDetail']}>
      <div className={style['userDetail']}>
        <ul className={style['details']}>
          <li>
            <span className={style.bold}>Name:</span>{' '}
            {isEditing ? (
              <input
                type='text'
                value={editedData.name}
                onChange={(e) =>
                  setEditedData({ ...editedData, name: e.target.value })
                }
              />
            ) : (
              userDetail?.userName || '--'
            )}
          </li>
          <li>
            <span className={style.bold}>Email:</span>{' '}
            {userDetail?.email || '--'}
          </li>
          <li>
            <span className={style.bold}>Description:</span>{' '}
            {isEditing ? (
              <textarea
                value={editedData.description}
                onChange={(e) =>
                  setEditedData({ ...editedData, description: e.target.value })
                }
              />
            ) : (
              userDetail?.description || '--'
            )}
          </li>
          <li>
            <span className={style.bold}>Phone Number:</span>{' '}
            {isEditing ? (
              <input
                type='number'
                value={editedData.phoneNumber}
                onChange={(e) =>
                  setEditedData({ ...editedData, phoneNumber: e.target.value })
                }
              />
            ) : (
              userDetail?.phoneNumber || '--'
            )}
          </li>
          <li>
            <span className={style.bold}>Country:</span>{' '}
            {isEditing ? (
              <input
                type='text'
                value={editedData.location}
                onChange={(e) =>
                  setEditedData({ ...editedData, location: e.target.value })
                }
              />
            ) : (
              userDetail?.location || '--'
            )}
          </li>
          {isEditing ? (
            <>
              <button className={style.updateButtonSave} onClick={handleSave}>
                Save
              </button>
              <button
                className={style.updateButtonCancel}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <button className={style.editButton} onClick={handleEdit}>
              <FaPencilAlt className={style.updateIcon} />
            </button>
          )}
        </ul>
        <div className={style['positionPhoto']}>
          {userDetail?.profilePicture && (
            <img
              src={userDetail.profilePicture}
              alt='img'
              className={style['photoPerfil']}
            />
          )}
        </div>
        <div className={style['socialIcons']}>
          <FaTwitter
            className={style['shareIcon']}
            style={{ color: '#55acee' }}
            onClick={handleTwitterShare}
          />
          <FaFacebookF
            className={style['shareIcon']}
            style={{ color: '#3b5998' }}
            onClick={handleFacebookShare}
          />
          <FaInstagram
            className={style['shareIcon']}
            style={{ color: '#ac2bac' }}
            onClick={handleInstagramShare}
          />
        </div>
      </div>
      <div>
        <CarruselUsers images={images} />
      </div>
    </div>
  );
};

export default UserDetail;
