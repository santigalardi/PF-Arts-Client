/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getFavorites } from '../../redux/actions';
import Card from '../../components/Card/Card';
// import Loader from '../../components/Loader/Loader';
import CustomPagination from '../../components/Pagination/Pagination';
// import NavMenu from '../../components/NavMenu/NavMenu';
import styles from './Favorites.module.css';

const LOCAL_STORAGE_KEY = 'myFavorites';

const Favorites = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  // const navigate = useNavigate();
  // const location = useLocation();

  // const [currentPage, setCurrentPage] = useState(1);
  // const artsPerPage = 8;
  // const pagination = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  //   const searchParams = new URLSearchParams(location.search);
  //   searchParams.set('page', pageNumber);
  //   const newSearch = searchParams.toString();
  //   navigate(`/?${newSearch}`);
  // };

  const myFavorites = useSelector((state) => state.myFavorites);

  const { userFav } = myFavorites;

  console.log(userFav);

  //*/*/*
  useEffect(() => {
    //****/ // ↓Obtener los favoritos guardados en el almacenamiento local
    const storedFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // ↓Si hay favoritos almacenados, actualizar el estado de Redux
    if (storedFavorites) {
      dispatch({ type: 'SET_FAVORITES', payload: storedFavorites });
    }
    dispatch(getFavorites(userId));
  }, [dispatch, userId]);

  ///** */
  useEffect(() => {
    // Guardar los favoritos en el almacenamiento local cuando se actualicen
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myFavorites));
  }, [myFavorites]);
  //*** */

  return (
    <div>
      <div>
        {userFav &&
          userFav.map((fav) => (
            <div className={styles['boxFav']} key={fav.artworkId}>
              <Card art={fav} />
            </div>
          ))}
      </div>
      {/* <CustomPagination artsPerPage={artsPerPage} allArts={myFavorites.length} currentPage={currentPage} pagination={pagination} /> */}
    </div>
  );
};

export default Favorites;
