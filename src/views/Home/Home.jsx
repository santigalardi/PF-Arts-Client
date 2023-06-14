import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions';
import Navbar from '../../components/Navbar/Navbar';
import Cards from '../../components/Cards/Cards';
import CustomPagination from '../../components/Pagination/Pagination';
import style from './Home.module.css';
import Footer from '../../components/Footer/Footer';

// Toda la logica de Home moverla a CardsContainer

function Home() {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.allUsers);
  const [filtered, setFiltered] = useState(allUsers); //se crea el estado local que toma el estado global
  const [searchString, setSearchString] = useState(''); //|| || || que corresponde al string que se escribe en buscar

  const [currentPage, setCurrentPage] = useState(1);
  const artsPerPage = 2;
  const indexOfLastArt = currentPage * artsPerPage; //15
  const indexOfFirstArt = indexOfLastArt - artsPerPage; // 0
  // eslint-disable-next-line no-unused-vars
  const currentArts = allUsers.slice(indexOfFirstArt, indexOfLastArt); // Desde esta variable se renderizan las cards.

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // CAMBIAR AL COMPONENTE SEARCHBAR
  function handleChange(event) {
    event.preventDefault(); //refrasca la pagina
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    //filtrado al dar buscar
    event.preventDefault();
    const filtered = allUsers.filter((user) => user.name.includes(searchString));
    setFiltered(filtered);
  }

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className={style['HomeViews']}>
      <Navbar className='navbar-style' handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allUsers={filtered} />
      {/* 
      <div className={styles.cardsContainer}>
        {currentArts.map((art) => (
          <NavLink to={`/detail/${art.id}`} key={art.id} className={styles.link}>
            <Card name={art.name} image={art.image} />
          </NavLink>
        ))}
      </div>
      */}
      <CustomPagination artsPerPage={artsPerPage} allArts={allUsers.length} currentPage={currentPage} pagination={pagination} />
      <Footer />
    </div>
  );
}

export default Home;
