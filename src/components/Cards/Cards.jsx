import Card from '../Card/Card';
import './Cards.style.css';
import PropTypes from 'prop-types';

function Cards({allUsers}) {
  const userList = allUsers;

  return (
    <div className="CardsComponents">
     {userList?.map((user, index) => (
        <Card key={index} user={user} />
        ))}
    </div>
  );
}
Cards.propTypes = {
  allUsers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;