import { useSelector } from 'react-redux';
import './Favorites.modules.css';
import Card from '../../components/Card/Card';

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <div>
      {myFavorites.map((user) => (
        <div className="boxFav" key={user.id}>
          <Card user={user} />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
