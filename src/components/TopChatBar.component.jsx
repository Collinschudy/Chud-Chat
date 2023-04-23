import { HiDotsVertical } from 'react-icons/hi';

const TopChatBar = () => {
    const styles = {
        container: `w-[100%] h-[4em] bg-slate-300`,
        topbar: `flex items-center justify-between w-[96%] m-auto h-[100%]`,
        name: `text-[1.5em]`
    }
  return (
    <div className={styles.container}>
        <div className={styles.topbar}>
            <span className={styles.name}>Ebube</span>
            <span className='text-[1.5em]'>< HiDotsVertical /></span>

        </div>
    </div>
  )
}

export default TopChatBar