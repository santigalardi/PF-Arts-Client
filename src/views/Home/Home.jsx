import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllArts } from '../../redux/actions';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import CustomPagination from '../../components/Pagination/Pagination';
import styles from './Home.module.css';
import Footer from '../../components/Footer/Footer';

// Toda la logica de Home moverla a CardsContainer

function Home() {
  const dispatch = useDispatch();

  const allArts = useSelector((state) => state.allArts);
  // eslint-disable-next-line no-unused-vars
  const [filtered, setFiltered] = useState(allArts); //se crea el estado local que toma el estado global
  const [searchString, setSearchString] = useState(''); //Esto cambiar a componente searchBar

  const [currentPage, setCurrentPage] = useState(1);
  const artsPerPage = 2;
  const indexOfLastArt = currentPage * artsPerPage; //15
  const indexOfFirstArt = indexOfLastArt - artsPerPage; // 0
  // eslint-disable-next-line no-unused-vars
  const currentArts = allArts.slice(indexOfFirstArt, indexOfLastArt); // Desde esta variable se renderizan las cards.

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllArts());
  }, [dispatch]);

  // CAMBIAR AL COMPONENTE SEARCHBAR
  function handleChange(event) {
    event.preventDefault(); //refrasca la pagina
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    //filtrado al dar buscar
    event.preventDefault();
    const filtered = allArts.filter((art) => art.name.includes(searchString));
    setFiltered(filtered);
  }

  return (
    <div className={styles['HomeViews']}>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
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
