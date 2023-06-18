import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllArts } from '../../redux/actions';
import Card from '../../components/Card/Card';
import Searchbar from '../../components/SearchBar/Searchbar';
import Filters from '../../components/Filters/Filters';
import CustomPagination from '../../components/Pagination/Pagination';
import styles from './CardsContainer.module.css';

const CardsContainer = () => {
  const dispatch = useDispatch();

  const allArts = useSelector((state) => state.allArts);
  const [currentPage, setCurrentPage] = useState(1);
  const artsPerPage = 8;
  const indexOfLastArt = currentPage * artsPerPage;
  const indexOfFirstArt = indexOfLastArt - artsPerPage;
  const [currentArts, setCurrentArts] = useState(allArts.slice(indexOfFirstArt, indexOfLastArt));

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllArts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentArts(allArts.slice(indexOfFirstArt, indexOfLastArt));
  }, [allArts, currentPage, indexOfFirstArt, indexOfLastArt]);

  return (
    <div>
      <div>
        <Searchbar setCurrentPage={setCurrentPage} />
        <Filters setCurrentPage={setCurrentPage} />
        {currentArts.length === 0 ? (
          <p>No se encontraron resultados.</p>
        ) : (
          <div className={styles['CardsContainer']}>
            {currentArts.map((art) => (
              <NavLink to={`/detail/${art.id}`} key={art.id} className={styles.link}>
                <Card art={art} />
              </NavLink>
            ))}
          </div>
        )}
        <CustomPagination artsPerPage={artsPerPage} allArts={allArts.length} currentPage={currentPage} pagination={pagination} />
      </div>
    </div>
  );
};

export default CardsContainer;
