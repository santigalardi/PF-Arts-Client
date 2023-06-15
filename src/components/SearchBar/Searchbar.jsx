import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllArts, getArtsByTitle } from '../../redux/actions';
import { MdManageSearch } from 'react-icons/md';
import style from './Searchbar.module.css';

const Searchbar = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  function handleChange(event) {
    setTitle(event.target.value);
  }

  const handleSearch = () => {
    if (!title) {
      dispatch(getAllArts());
    } else {
      dispatch(getArtsByTitle(title));
    }
  };

  return (
    <form onChange={handleChange}>
      <input className={style['NavSearch']} placeholder='Search...' type='search' />
      <button className={style['BottonSearch']} type='submit' onClick={handleSearch}>
        <MdManageSearch className={style['icon']} />
      </button>
    </form>
  );
};

export default Searchbar;
