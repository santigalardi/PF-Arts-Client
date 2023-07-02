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
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPencilAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaMobileAlt,
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
    'https://img.freepik.com/fotos-premium/fondo-pantalla-predeterminado-fondo-abstracto-moda-futurista-onda-minimalista-diseno-3d-diseno_477306-878.jpg',
    'https://img.freepik.com/fotos-premium/fondo-pantalla-predeterminado-fondo-abstracto-moda-futurista-onda-minimalista-diseno-3d-diseno_477306-829.jpg',
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
        <div className={style['positionPhoto']}>
          {userDetail?.profilePicture && (
            <img
              src={userDetail.profilePicture}
              alt='img'
              className={style['photoPerfil']}
            />
          )}
        </div>
        <div className={style['details']}>
          <div className={style['username']}>
            {isEditing ? (
              <input
                className={style.inputName}
                placeholder='Username'
                type='text'
                value={editedData.name}
                onChange={(e) =>
                  setEditedData({ ...editedData, name: e.target.value })
                }
              />
            ) : (
              <span className={style['username-text']}>
                {userDetail?.userName || '-'}
              </span>
            )}
            <span>
              {isEditing ? (
                <>
                  <div className={style['editBs']}>
                    <button
                      className={style.updateButtonSave}
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className={style.updateButtonCancel}
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <button className={style.editButton} onClick={handleEdit}>
                  <FaPencilAlt className={style.updateIcon} />
                </button>
              )}
            </span>
          </div>

          <div>
            <FaEnvelope className={style['iconEmail']} />{' '}
            <span className={style['email-text']}>
              {userDetail?.email || '-'}
            </span>{' '}
            <FaMapMarkerAlt className={style['iconLocation']} />{' '}
            <span className={style['location']}>
              {isEditing ? (
                <input
                  className={style.inputName}
                  placeholder='Location'
                  type='text'
                  value={editedData.location}
                  onChange={(e) =>
                    setEditedData({ ...editedData, location: e.target.value })
                  }
                />
              ) : (
                <span className={style['location-text']}>
                  {userDetail?.location || '-'}
                </span>
              )}
            </span>
          </div>

          <div className={style['phone']}>
            <FaMobileAlt className={style['iconPhone']} />{' '}
            {isEditing ? (
              <input
                className={style.inputName}
                placeholder='Phone number'
                type='text'
                value={editedData.phoneNumber}
                onChange={(e) =>
                  setEditedData({ ...editedData, phoneNumber: e.target.value })
                }
              />
            ) : (
              <span className={style['phone-text']}>
                {userDetail?.phoneNumber || '-'}
              </span>
            )}
          </div>
          <div className={style['bio']}>
            {isEditing ? (
              <textarea
                className={style.inputBio}
                placeholder='Tell us about yourself'
                value={editedData.description}
                onChange={(e) =>
                  setEditedData({ ...editedData, description: e.target.value })
                }
              />
            ) : (
              <p className={style['bio-text']}>
                {userDetail?.description || '-'}
              </p>
            )}
          </div>
        </div>

        <div className={style['socialIcons']}>
          <FaTwitterSquare
            className={style['shareIcon']}
            style={{ color: '#55acee' }}
            onClick={handleTwitterShare}
          />
          <FaFacebookSquare
            className={style['shareIcon']}
            style={{ color: '#3b5998' }}
            onClick={handleFacebookShare}
          />
          <FaInstagramSquare
            className={style['shareIcon']}
            style={{ color: '#3374FF' }}
            onClick={handleInstagramShare}
          />
        </div>
      </div>

      <CarruselUsers images={images} />
    </div>
  );
};

export default UserDetail;
