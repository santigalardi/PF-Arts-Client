 import styles from './UserCard.module.css';

 const UserCard = ({ user }) => {
   return (
     <div className={styles.userCard}>
       {/* <img src={user.image} className={styles.image} /> */}
       <h3>{user.userName}</h3>
       <p>Email: {user.email}</p>
       <p>UserId: {user.userId}</p>
       <i className={`fas fa-pencil-alt ${styles.editIcon}`} />
       {/* Agrega más información o estilos según tus necesidades */}
     </div>
   );
 };

 export default UserCard;
