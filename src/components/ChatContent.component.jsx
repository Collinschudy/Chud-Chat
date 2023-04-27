import { useEffect, useState } from 'react';
import Message from './Message.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFriendChat } from '../redux/chats/chat.selectors';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase.utils';


const ChatContent = ({ friend }) => {
  const styles = {
    container: `h-[calc(100%-8em)] overflow-scroll`
  }

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = () => {
      const unsub = onSnapshot(doc(db, "chats", friend.combinedId), (doc) => {
        doc.exists() && setMessages(doc.data().message);
      });
      return () => {
        unsub();
      }

    }
    friend.combinedId && getMessages()

  }, [friend.combinedId])

  return (
    <div className={styles.container}>
      {messages && messages.map((message, idx) => {
        return (

          <Message message={message} key={message.id}/>

        )
      })}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  friend: selectFriendChat
})

export default connect(mapStateToProps)(ChatContent);