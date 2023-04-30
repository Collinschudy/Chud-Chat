import { useEffect, useState } from 'react';
import Message from './Message.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFriendChat } from '../redux/chats/chat.selectors';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase.utils';


const ChatContent = ({ friend }) => {
  const styles = {
    container: `pt-[1em] h-[calc(100%-8em)] overflow-y-scroll overflow-x-hidden`
  }

  const [message, setMessage] = useState([]);

  useEffect(() => {
    const getMessages = () => {
      const unsub = onSnapshot(doc(db, "chats", friend.combinedId), (doc) => {
        doc.exists() && setMessage(doc.data().message);
      });
      return () => {
        unsub();
      }

    };
    friend.combinedId && getMessages()

  }, [friend.combinedId]);

  return (
    <div className={styles.container}>
      {message && message.map((details, idx) => {
        return <Message message={details} key={details.id + idx}/>
      })}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  friend: selectFriendChat
})

export default connect(mapStateToProps)(ChatContent);