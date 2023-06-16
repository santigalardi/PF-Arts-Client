import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './filters.module.css';

const Filters = () => {
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

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    // Llama a la acción Redux si es necesario
    // dispatch(getArtsByFilters(filters.century, filters.order, filters.created));

    // Resto del código...
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleFilterSubmit}>
        <label>
          <select
            name="century"
            value={filters.century}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="17th">17th Century</option>
            <option value="18th">18th Century</option>
            <option value="19th">19th Century</option>
            <option value="20th">20th Century</option>
            <option value="21st">21st Century</option>
          </select>
        </label>
        <label>
          <select
            name="order"
            value={filters.order}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <label>
          <select
            name="created"
            value={filters.created}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="true">Created Art</option>
            <option value="false">API Art</option>
          </select>
        </label>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default Filters;
