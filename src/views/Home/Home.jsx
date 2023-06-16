import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Searchbar from '../../components/SearchBar/Searchbar';
import Filters from '../../components/Filters/Filters';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles['HomeContainer']}>
      <CustomCarousel />
      <Searchbar />
      <Filters />
      <CardsContainer />
    </div>
  );
};

export default Home;
