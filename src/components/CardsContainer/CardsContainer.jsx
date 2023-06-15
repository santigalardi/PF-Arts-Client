import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllArts } from '../../redux/actions';
import Card from '../../components/Card/Card';
import CustomPagination from '../../components/Pagination/Pagination';
import styles from './CardsContainer.module.css';

const CardsContainer = () => {
  const dispatch = useDispatch();

  const allArts = useSelector((state) => state.allArts);

  const [currentPage, setCurrentPage] = useState(1);
  const artsPerPage = 6;
  const indexOfLastArt = currentPage * artsPerPage; //15
  const indexOfFirstArt = indexOfLastArt - artsPerPage; // 0
  const currentArts = allArts.slice(indexOfFirstArt, indexOfLastArt); // Desde esta variable se renderizan las cards.

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllArts());
  }, [dispatch]);

  return (
    <div>
      <div className={styles['CardsContainer']}>
        {currentArts.map((art) => (
          <NavLink to={`/detail/${art.id}`} key={art.id} className={styles.link}>
            <Card art={art} />
          </NavLink>
        ))}
      </div>
      <CustomPagination artsPerPage={artsPerPage} allArts={allArts.length} currentPage={currentPage} pagination={pagination} />
    </div>
  );
};

export default CardsContainer;
