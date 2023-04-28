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
  const [show, setShow] = useState(false)

  const styles = {
    container: `w-[90%] flex items-center justify-between m-auto mt-[1em] bg-sky-900 rounded-tl-[2em] rounded-bl-[2em] rounded-tr rounded-br relative`,
    avatar: `w-[3em] h-[3em] rounded-full object-cover`,
    username: `flex items-center text-[1.5em] min-w-[30%] justify-between relative`,
    logout: `bg-white text-black h-[4em] absolute flex flex-col text-[0.7em] p-[0.5em] rounded top-[2em] right-[0] z-40`,
    hide: `hidden`
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.avatar} src={currentUser.photoURL} alt="avatar of user" />
      </div>
      <div className={styles.username}>
        {currentUser.displayName} <span><HiDotsVertical onClick={() => {setShow(!show)}} /></span>
          {show ? 
          (<div className={styles.logout}>
            <span>Profile</span>
            <span onClick={() => signOut(auth)}>sign out</span>
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

