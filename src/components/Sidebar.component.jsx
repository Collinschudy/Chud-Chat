import React from 'react';
import Title from './Title.component';
import Navbar from '../components/Navbar.component';
import Search from './Search.component';

const Sidebar = () => {

  const styles = {
    container: `w-[35%] border-r border-black bg-sky-700 text-white`
  }
  return (
    <div className={styles.container}>
      <Title />
      <Navbar />
      <Search />
      </div>
  )
}

export default Sidebar;