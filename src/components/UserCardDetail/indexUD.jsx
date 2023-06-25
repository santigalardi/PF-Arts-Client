import style from './indexDetail.module.css'
import { getUserDetail } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const UserDetail = (userCardId) => {
    const dispatch = useDispatch();
    const userDetail = useSelector(state => state.userDetail);
  
    useEffect(() => {
      dispatch(getUserDetail(userCardId));
    }, [dispatch, userCardId]);
  
    const { name ,email,userId,description, phoneNumber,location } = userDetail;
    return (
        <div className={style['containerUserDetail']}>
            <div className={style['userDetail']}>
                <img className={style['imgU']} />
                <ul className={style['details']}>
                    <li>Name:{name.name}</li>
                    <li>Email:{email.email}</li>
                    <li>UserId:{userId.userId}</li>
                    <li>Description:{description.description}</li>
                    <li>Phone Number:{phoneNumber.phoneNumber}</li>
                    <li>Country:{location.location}</li>
                </ul>
            </div>
            <h1>
                Arts
            </h1>
        </div>
    )
}
export default UserDetail
//nF
{/* <li>Name:{name}</li>
<li>Email:{email}</li>
<li>UserId:{userId}</li>
<li>Description:{description}</li>
<li>Phone Number:{phoneNumber}</li>
<li>Country:{location}</li> */}
//FCC
{/* <li>Name:</li>
<li>Email:</li>
<li>UserId:</li>
<li>Description:</li>
<li>Phone Number:</li>
<li>Country:</li> */}