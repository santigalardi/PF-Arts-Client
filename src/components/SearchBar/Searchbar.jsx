import './Searchbar.css';
import PropTypes from 'prop-types';
import {MdManageSearch} from 'react-icons/md';

const Searchbar=(handleChange, handleSubmit)=>{
    return(
    <form onChange={handleChange}>
        <input className='NavSearch' placeholder='Search...' type='search' />
        <button className='BottonSearch'type='submit' onClick={handleSubmit}>
          <MdManageSearch className='icon'/>
        </button>
      </form>

    )
}
Searchbar.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };
  
export default Searchbar