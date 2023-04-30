import { HiDotsVertical } from 'react-icons/hi';
import { createStructuredSelector } from 'reselect';
import { selectFriendChat } from '../redux/chats/chat.selectors';
import { selectCurrentUser } from '../redux/user/userSelector';
import { connect } from 'react-redux';
import {useState} from 'react';
import { doc, deleteDoc, updateDoc, deleteField } from "firebase/firestore";
import { db } from '../firebase/firebase.utils';

const TopChatBar = ({ friend, currentUser }) => {
  const [show, setShow] = useState(false);
  const name = friend.chudChatHandle;
  const { combinedId } = friend;
  const nameCap = name?.charAt(0).toUpperCase() + name?.slice(1);

  const clearChat = async () => {
    if (friend.combinedId) {
      try {
        await deleteDoc(doc(db, 'chats', combinedId));
        const collectionRef = doc(db, 'userChats', currentUser.uid);
        await updateDoc(collectionRef, {
          [friend.combinedId]: deleteField()
          
        });
        alert('chats deleted')

      } catch (error) {
        console.log(error.message)
      }
    } else {
      return;
    }

  }

  const styles = {
    container: ` w-[100%] h-[4em] bg-slate-300`,
    topbar: `flex items-center justify-between w-[96%] m-auto h-[100%] relative`,
    name: `text-[1.5em]`,
    clearChat: `border border-black bg-white px-[.5em] py-[0.2em] absolute top-12 right-0 w-[6em] cursor-pointer`
  }
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        {friend && <span className={styles.name}>{typeof nameCap === 'string' ? String(nameCap) : ''}</span>}
        <span className='text-[1.5em]'>
          < HiDotsVertical onClick={() => {setShow(!show)}} />
          {show ? <span className={styles.clearChat}
          onClick={clearChat}>
            Clear chat
            </span>
            : ''}
        </span>

      </div>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  friend: selectFriendChat,
  currentUser: selectCurrentUser,
})


export default connect(mapStateToProps)(TopChatBar)