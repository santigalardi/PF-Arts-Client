import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAllUsers } from '../../redux/actions';
import UserCard from '../../components/UserCard/UserCard';
import styles from './UsersPage.module.css';
import UserPagination from '../../components/PgUser/PgUser';

const UsersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationUsers = useLocation();
  const users = useSelector((state) => state.allUsers);
  const [currentUsersPage, setCurrentUsersPage] = useState(1);
  const usersPerPage = 6;
  const indexOfLastUser = currentUsersPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageUsers = Number(searchParams.get('pageUser')) || 1;
    setCurrentUsersPage(pageUsers);
  }, [locationUsers.search]);

  const handlePageChange = (pageNumber) => {
    setCurrentUsersPage(pageNumber);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('pageUser', pageNumber);
    const newSearchUser = searchParams.toString();
    navigate(`/?${newSearchUser}`);
  };

  const handleEditUser = (userId) => {
    // Lógica para editar el usuario con el ID correspondiente
    console.log(`Editar usuario con ID: ${userId}`);
  };

  return (
    <div>
      <div className={styles.usersPage}>
        <div className={styles.userCards}>
          {currentUsers.map((user) => (
            <UserCard key={user.userId} user={user} value={handleEditUser} />
          ))}
        </div>
      </div>
      <div className={styles['pagination']}>
      <UserPagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        currentUsersPage={currentUsersPage}
        handlePageChange={handlePageChange}
      />
      </div>
    </div>
  );
};

export default UsersPage;
