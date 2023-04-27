import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react';
import { db } from '../firebase/firebase.utils';
import { collection, query, where, getDocs, getDoc, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelector';

const Search = ({currentUser}) => {
  const [searchUser, setSearchUser] = useState('');
  const [foundUser, setFoundUser] = useState(null);


  const handleSearch = async () => {
    const userRef = collection(db, 'chudChatUsers')
    const q = query(userRef, where("chudChatHandle", "==", searchUser));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setFoundUser(doc.data());
        console.log(foundUser)
      });
    } catch(err){
      console(err.code, err.message)
    }
   
    
    
  }
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }
  const handleSearchUserChange = e => {
    setSearchUser(e.target.value)
  }

  const handleSelect = async () => {
    const combinedId = currentUser.uid + foundUser.uid;
    try {
      const chatRef = await getDoc(doc(db, 'chats', combinedId))

      if (!chatRef.exists()){
        await setDoc(doc(db, 'chats', combinedId), {messages: []});

        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId+'.userDetails']: {
            uid: foundUser.uid,
            chudChatHandle: foundUser.chudChatHandle,
            photoURL: foundUser.photoURL,
            combinedId,
          },
          [combinedId+'.date']: serverTimestamp(),
        })

        await updateDoc(doc(db, 'userChats', foundUser.uid), {
          [combinedId+'.userDetails']: {
            uid: currentUser.uid,
            chudChatHandle: currentUser.chudChatHandle,
            photoURL: currentUser.photoURL,
            combinedId,
          },
          [combinedId+'.date']: serverTimestamp(),
        })
      }
    } 
    catch (error) {
      console.log(error.code, error.message)
    }
    setFoundUser(null)
    setSearchUser('')
  };

  
  const styles = {
    container: `w-[90%] m-auto flex flex-col justfy-around mt-[1em] mb-[0.5em]`,
    inputform: `w-[100%] relative z-100`,
    input: `placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none text-black`,
    founduser: `w-[100%] flex items-center mt-[1em]`,
    userimage: `w-[3em] h-[3em] rounded-full object-cover`,
    foundusername: `text-[1.2em] ml-[1em]`
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inputform}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 z-0">
            <AiOutlineSearch className="h-5 w-5 fill-slate-500" />
          </span>
          <input className={styles.input} type="text" placeholder='search friend to start a new chat' 
          onChange={handleSearchUserChange} 
          onKeyDown={handleKey} 
          value={searchUser}
          />
        </div>
       { foundUser ? <div className={styles.founduser} onClick={handleSelect}>
          <div className={styles.imagecontainer}>
            <img className={styles.userimage} src={foundUser.photoURL} alt="avatar" />
          </div>
          <div className={styles.foundusername}>
            <span>{foundUser.chudChatHandle}</span>
          </div>
        </div>
        : searchUser.trim() === '' ?
        ''
      :
      <div>user not found</div>}
      </div>
      <hr className='mb-[1em] bg-sky-900 border-none h-[1px]' />
    </>

  )
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(Search);