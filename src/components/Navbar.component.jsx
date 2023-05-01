import { connect } from 'react-redux';
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.utils'

import { HiDotsVertical } from 'react-icons/hi'
import { toggleProfileView } from '../redux/profile-view/profileview.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelector';
import { selectProfileView } from '../redux/profile-view/profileview.selector';
import { useState } from 'react';

const Navbar = ({ hidden, toggleProfileView, currentUser }) => {
  const [show, setShow] = useState(false);
  const name = currentUser.chudChatHandle;
  const nameCap = name?.charAt(0).toUpperCase() + name?.slice(1);

  const styles = {
    container: `w-[100%] h-[4em] flex items-center justify-between m-auto bg-sky-900 relative`,
    avatar: `w-[100%] h-[100%] rounded-[18%] object-cover`,
    imageContainer: `w-[3.2em] h-[3.2em] ml-[0.7em] border-2 border-slate-500 rounded-[20%] `,
    username: `flex items-center text-[1.5em] min-w-[25%] justify-around relative`,
    logout: `border border-black bg-white text-black h-[4.5em] absolute flex flex-col text-[0.7em] p-[0.5em] rounded top-[2em] right-[0] z-40 justify-between`,
    hide: `hidden`
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.avatar} src={currentUser.photoURL} alt="avatar of user" />
      </div>
      
      <div className={styles.username}>
        {nameCap} <span><HiDotsVertical onClick={() => {setShow(!show)}} /></span>
          {show ? 
          (<div className={styles.logout}>
            <span className='cursor-pointer'>Profile</span>
            <span  className='cursor-pointer' onClick={() => signOut(auth)}>sign out</span>
          </div>)
          :
          ''
        }
      </div>

    </div>
  )
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectProfileView
})
const mapDispatchToProps = dispatch => ({
  toggleProfileView: () => dispatch(toggleProfileView())
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

