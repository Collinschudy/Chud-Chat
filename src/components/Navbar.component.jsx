import React, { useState } from 'react';
import { connect } from 'react-redux';

import image from '../assets/avatar.jpg';
import { HiDotsVertical } from 'react-icons/hi'
import { toggleProfileView } from '../redux/profile-view/profileview.action';

const Navbar = ({ hidden, toggleProfileView }) => {

  const styles = {
    container: `border border-red-800 w-[90%] flex items-center justify-between m-auto`,
    avatar: `w-[4em] h-[4em] rounded-[50%]`,
    username: `flex items-center text-[1.5em] border border-red-800 min-w-[30%] justify-between relative`,
    logout: `bg-white text-black h-[4em] absolute flex flex-col text-[0.8em] p-[0.5em] rounded top-[2em] right-[0]`,
    hide: `hidden`
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.avatar} src={image} alt="" />
      </div>
      <div className={styles.username}>
        Collins <span><HiDotsVertical onClick={() => toggleProfileView()} /></span>
          {!hidden ? 
          (<div className={styles.logout}>
            <span>Profile</span>
            <span>sign out</span>
          </div>)
          :
          ''
        }
      </div>

    </div>
  )
}


const mapStateToProps = ({ profile }) => ({
  hidden: profile.hidden
})
const mapDispatchToProps = dispatch => ({
  toggleProfileView: () => dispatch(toggleProfileView())
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

