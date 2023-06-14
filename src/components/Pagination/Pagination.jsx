import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';
import styles from './Pagination.module.css';

const CustomPagination = ({ artsPerPage, allArts, currentPage, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allArts / artsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className={styles['pagination-container']}>
      <Pagination.Prev />
      {pageNumbers.map((number) => (
        <Pagination.Item key={number} onClick={() => pagination(number)} disabled={currentPage === number}>
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next />
    </Pagination>
  );
};

CustomPagination.propTypes = {
  artsPerPage: PropTypes.number.isRequired,
  allArts: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pagination: PropTypes.func.isRequired,
};

export default CustomPagination;
