import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CarruselUsers.module.css'; // Archivo de estilos CSS

const CarruselUsers = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Calcula el siguiente índice
  //     const nextIndex = (startIndex + 1) % images.length;
  //     setStartIndex(nextIndex);
  //   }, 3000); // Intervalo de 3 segundos

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [startIndex, images]);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 2 >= images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 2 : prevIndex - 1
    );
  };

  return (
    <div className={styles['carruselContainer']}>
      <div className={styles['imageContainer']}>
        {images.slice(startIndex, startIndex + 2).map((image, index) => (
          <img
            key={index}
            className={styles['image']}
            src={image}
            alt="User Image"
          />
        ))}
      </div>
      <button className={styles['prevButton']} onClick={handlePrev}>
        {'<'}
      </button>
      <button className={styles['nextButton']} onClick={handleNext}>
        {'>'}
      </button>
    </div>
  );
};

CarruselUsers.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CarruselUsers;
