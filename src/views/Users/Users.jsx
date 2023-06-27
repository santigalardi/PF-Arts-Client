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
  const allUsers = useSelector((state) => state.allUsers);
  const [currentUsersPage, setCurrentUsersPage] = useState(1);
  const usersPerPage = 1;
  const indexOfLastUser = currentUsersPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

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
    const searchParamsUser = new URLSearchParams(location.search);
    searchParamsUser.set('pageUser', pageNumber);
    const newSearchUser = searchParamsUser.toString();
    navigate({ search: `?${newSearchUser}` });
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
            <UserCard 
            key={user.userId} 
            user={user} 
            value={handleEditUser} />
          ))}
        </div>
      </div>
      <div className={styles['pagination']}>
      <UserPagination
        usersPerPage={usersPerPage}
        totalUsers={allUsers.length}
        currentUsersPage={currentUsersPage}
        handlePageChange={handlePageChange}
      />
      </div>
    </div>
  );
};

export default UsersPage;
