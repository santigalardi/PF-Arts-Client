import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles['HomeContainer']}>
      <CustomCarousel />
      <CardsContainer />
    </div>
  );
};

export default Home;
