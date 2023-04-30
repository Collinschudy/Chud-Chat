import Title from './Title.component';
import Navbar from '../components/Navbar.component';
import Search from './Search.component';
import CurrentChats from './CurrentChats.component';

const Sidebar = () => {

  const styles = {
    container: `w-[100%] flex-[0_0_auto] bg-sky-700 text-white sm:w-[35%] relative border-r`
  }
  return (
    <div className={styles.container}>

      <Navbar />
      <Search />
      <CurrentChats />
      <div className='absolute bottom-0'>
        <Title />
      </div>
    </div>
  )
}

export default Sidebar;