import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllArts, getArtsByTitle } from '../../redux/actions';
import { MdManageSearch } from 'react-icons/md';
import style from './Searchbar.module.css';

const Searchbar = () => {
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
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className={style['NavSearch']} placeholder='Search...' type='search' value={title} onChange={handleChange} />
      <button className={style['BottonSearch']} type='submit'>
        <MdManageSearch className={style['icon']} />
      </button>
    </form>
  );
};

export default Searchbar;
