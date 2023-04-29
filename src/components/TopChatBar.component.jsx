import { HiDotsVertical } from 'react-icons/hi';
import { createStructuredSelector } from 'reselect';
import { selectFriendChat } from '../redux/chats/chat.selectors';
import { connect } from 'react-redux';

const TopChatBar = ({friend}) => {
  const { chudChatHandle } = friend;
  
  
    const styles = {
        container: `w-[100%] h-[4em] bg-slate-300`,
        topbar: `flex items-center justify-between w-[96%] m-auto h-[100%]`,
        name: `text-[1.5em]`
    }
  return (
    <div className={styles.container}>
        <div className={styles.topbar}>
            <span className={styles.name}>{chudChatHandle}</span>
            <span className='text-[1.5em]'>< HiDotsVertical /></span>

        </div>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  friend: selectFriendChat,
})


export default connect(mapStateToProps)(TopChatBar)