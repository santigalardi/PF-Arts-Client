import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getArtsByFilters } from '../../redux/actions';
import styles from './filters.module.css';

const Filters = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    century: '',
    order: '',
    created: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    const { century, order, created } = filters;
    dispatch(getArtsByFilters(century, order, created));
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleFilterSubmit}>
        <label>
          <select
            name='century'
            value={filters.century}
            onChange={handleFilterChange}
          >
            <option value=''>All</option>
            <option value='17'>17th Century</option>
            <option value='18'>18th Century</option>
            <option value='19'>19th Century</option>
            <option value='20'>20th Century</option>
            <option value='21'>21st Century</option>
          </select>
        </label>
        <label>
          <select
            name='order'
            value={filters.order}
            onChange={handleFilterChange}
          >
            <option value=''>All</option>
            <option value='ASC'>Ascending</option>
            <option value='DESC'>Descending</option>
          </select>
        </label>
        <label>
          <select
            name='created'
            value={filters.created}
            onChange={handleFilterChange}
          >
            <option value=''>All</option>
            <option value='true'>Created Art</option>
            <option value='false'>API Art</option>
          </select>
        </label>
        <button type='submit'>Apply Filters</button>
      </form>
    </div>
  );
};

Filters.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Filters;
