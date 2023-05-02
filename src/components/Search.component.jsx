import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react';
import { db } from '../firebase/firebase.utils';
import { collection, query, where, getDocs, getDoc, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelector';

const Search = ({ currentUser }) => {
  const [searchUser, setSearchUser] = useState("");
  const [foundUser, setFoundUser] = useState(null);


  const handleSearch = async () => {
    const userRef = collection(db, 'chudChatUsers')
    const q = query(userRef, where("chudChatHandle", "==", searchUser.toLowerCase()));
   

    try {
      
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc.data().uid === currentUser.uid){
          return
        }
        setFoundUser(doc.data());
      });
    } catch (err) {
      console.log('Error at handleSearch() in the Search component: ', err.code, err.message)
    }

  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async () => {
    const combinedId = currentUser.uid + foundUser.uid;
    try {
      const chatRef = await getDoc(doc(db, 'chats', combinedId));

      if (!chatRef.exists()) {
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userDetails']: {
            uid: foundUser.uid,
            chudChatHandle: foundUser.chudChatHandle,
            photoURL: foundUser.photoURL,
            combinedId,
          },
          [combinedId + '.date']: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', foundUser.uid), {
          [combinedId + '.userDetails']: {
            uid: currentUser.uid,
            chudChatHandle: currentUser.chudChatHandle,
            photoURL: currentUser.photoURL,
            combinedId,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
      }
    }
    catch (error) {
      console.log('Error at handleSelect() in the search component: ', error.code, error.message)
    }
    setFoundUser(null);
    setSearchUser('');
  };


  const styles = {
    container: `w-[90%] m-auto flex flex-col justfy-around mt-[1em] mb-[0.5em]`,
    inputform: `w-[100%] relative z-100 flex items-center`,
    founduser: `w-[100%] flex items-center mt-[1em]`,
    userimage: `w-[3em] h-[3em] rounded-full object-cover`,
    foundusername: `text-[1.2em] ml-[1em]`,
    input: `mb-[0.5em] py-[0.5em] outline-none bg-transparent border-none w-[70%] placeholder:italic placeholder:text-slate-300`
    
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inputform}>
          <span className="absolute inset-y-0 right-[3em] flex items-center pl-2 z-0">
            <AiOutlineSearch className="h-5 w-5 fill-white-500" onClick={handleSearch}/>
          </span>
          <input
            className={styles.input}
            type="text"
            placeholder='search friend to start a new chat'
            onChange={(e) => setSearchUser(e.target.value)}
            onKeyDown={handleKey}
            value={searchUser}
          />
        </div>
        {foundUser && (
        <div className={styles.founduser} onClick={handleSelect}>
          <div className={styles.imagecontainer}>
            <img className={styles.userimage} src={foundUser.photoURL} alt="avatar" />
          </div>
          <div className={styles.foundusername}>
            <span>{foundUser.chudChatHandle}</span>
          </div>
        </div>
        )}
      </div>
      <hr className='mb-[1em] bg-sky-900 border-none h-[1px]' />
    </>

  )
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(Search);