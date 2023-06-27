// import style from './UDetail.module.css'
// import UserDetail from '../../components/UserCardDetail/indexUD'
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useState } from 'react';

// const UDetail =()=>{
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const [detailUser, setdetailUser]= useState(false);
//     const currentUser = {
//         userId: 1,
//         profilePicture: null,
//         userName: 'ejem',
//         description: null,
//         email: 'ejem@gmail.com',
//         phoneNumber: null,
//         location: null,
//         password: 'Alex12345'
//       };
    
//     return(
//         <div>
//         <NavLink className={style['BttBack']} to='/users'>
//         {' '}
//         ← BACK{' '}
//         </NavLink>
//         <div className={style['ContainerUDetail']}>
//             <UserDetail userCardId={currentUser} />
//         </div>
//         </div>
//     )
// }
// export default UDetail;