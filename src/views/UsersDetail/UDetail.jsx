import style from './UDetail.module.css'
import UserDetail from '../../components/UserCardDetail/indexUD'

const UDetail =()=>{
    const currentUser = {
        userId: 1,
        name: 'John',
        email: 'john@example.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        phoneNumber: '1234567890',
        location: 'Example City',
      };
    
    return(
        <div className={style['ContainerUDetail']}>
            <UserDetail userCardId={currentUser} />
        </div>
    )
}
export default UDetail;