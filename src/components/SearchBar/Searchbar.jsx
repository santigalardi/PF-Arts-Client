import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllArts, getArtsByTitle } from '../../redux/actions';
import { MdManageSearch } from 'react-icons/md';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

const Searchbar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) {
      dispatch(getAllArts());
    } else {
      dispatch(getArtsByTitle(title));
      setCurrentPage(1);
    }
  };

  return (
    <div className={style['searchbar-container']}>
      <form onSubmit={handleSubmit}>
        <input className={style['NavSearch']} placeholder='Search...' type='search' value={title} onChange={handleChange} />
        <button className={style['BottonSearch']} type='submit'>
          <MdManageSearch className={style['icon']} />
        </button>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Searchbar;
