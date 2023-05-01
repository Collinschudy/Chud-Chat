import { BsFillSendFill } from 'react-icons/bs';
import { RiImageFill } from 'react-icons/ri';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelector';
import { selectFriendChat } from '../redux/chats/chat.selectors';
import { connect } from 'react-redux';
import { useState } from 'react';
import { updateDoc, doc, arrayUnion, Timestamp, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../firebase/firebase.utils';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';




const MessageInput = ({ currentUser, friend }) => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const senderId = currentUser.uid;
  const date = Timestamp.now()
  const chatId = Date.now().toString();
 
  var dt = new Date();
  var hours = dt.getHours(); 
  var AmOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = (hours % 12) || 12;
  var minutes = dt.getMinutes();
  
  var time = hours + ":" + (minutes < 10 ? '0':'') + minutes + " " + AmOrPm;



  const styles = {
    container: `h-[4em] bg-slate-300 border-t border-sky-300`,
    wrapper: `flex items-center justify-between w-[92%] h-[100%] m-auto`,
    inputcontainer: `h-[100%] flex items-center w-[85%]`,
    input: `placeholder:italic w-full focus:outline-none h-[80%] rounded-xl`
  }

  const handleSendMsg = async () => {

    if (text === '' || text.trim() === '') {
      return;
    }
    if (img) {
      const storageRef = ref(storage, chatId);

      uploadBytesResumable(storageRef, img).then(
        () => {
          getDownloadURL(storageRef).then(async (url) => {
            console.log(url);
            await updateDoc(doc(db, "chats", friend.combinedId), {
              message: arrayUnion({
                id: chatId,
                text,
                senderId: senderId,
                date: date,
                photo: url,
                time: time,
              }),
            });
          });
        });
    }
    else {
      await updateDoc(doc(db, "chats", friend.combinedId), {
        message: arrayUnion({
          id: chatId,
          text,
          senderId: senderId,
          date: date,
          time: time
        }),
      });

    };

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [friend.combinedId + ".lastMessage"]: {
        text: `${text.substring(0, 40)}${text.length >= 40 ? '...' : ''}`,
      },
      [friend.combinedId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", friend.uid), {
      [friend.combinedId + ".lastMessage"]: {
        text: `${text.substring(0, 40)}${text.length >= 40 ? "..." : ''}`,
      },
      [friend.combinedId + ".date"]: serverTimestamp(),
    });

    setText('');
    setImg(null);
  }
  const handleEnter = e => {
    e.code === 'Enter' && handleSendMsg();
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="file"
          id='img'
          className='hidden'
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="img">
          <RiImageFill />
        </label>

        <div className={styles.inputcontainer}>
          <input className={styles.input}
            type="text"
            placeholder='Type your message'
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleEnter}
          />
        </div>
        <BsFillSendFill onClick={handleSendMsg} />
      </div>

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  friend: selectFriendChat
})
export default connect(mapStateToProps)(MessageInput);