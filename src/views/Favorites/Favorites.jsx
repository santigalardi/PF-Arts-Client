import { Route, Swictch } from 'react-redux';
import './Favorites.modules.css';
import Card from '../../components/Card';

const Favorites = (myFavorites) => {
  return (
    <div>
      <Swictch>
        <Route path='/favorites'>
          {myFavorites.map((user) => {
            <div className='boxFav'>
              <Card key={user.id} user={user} />
            </div>;
          })}
        </Route>
      </Swictch>
    </div>
  );
};
export default Favorites;
