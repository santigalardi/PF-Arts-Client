import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllArts } from '../../redux/actions';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import CustomPagination from '../../components/Pagination/Pagination';
import styles from './Home.module.css';
import Footer from '../../components/Footer/Footer';

function Home() {
  const dispatch = useDispatch();

  const allArts = useSelector((state) => state.allArts);

  const [currentPage, setCurrentPage] = useState(1);
  const artsPerPage = 2;
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
    <div className={styles['HomeViews']}>
      <Navbar />
      <div className={styles.cardsContainer}>
        {currentArts.map((art) => (
          <NavLink to={`/detail/${art.id}`} key={art.id} className={styles.link}>
            <Card art={art} />
          </NavLink>
        ))}
      </div>
      <CustomPagination artsPerPage={artsPerPage} allArts={allArts.length} currentPage={currentPage} pagination={pagination} />
      <Footer />
    </div>
  );
}

export default Home;
