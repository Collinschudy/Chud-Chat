import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelector';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/firebase.utils';
import { setFriendToChat } from '../redux/chats/chat.actions';
import { selectFriendChat } from '../redux/chats/chat.selectors';

const CurrentChats = ({ currentUser, setfoundFriend }) => {
    const styles = {
        container: `w-[90%] m-auto`,
        currentchat: `flex items-center mb-[0.5em]`,
        chatimg: `w-[3.5em] h-[3.5em] rounded-full object-cover`,
        details: `ml-[1em]`,
        name: `text-[1.5em]`
    }

    const [friend, setFriend] = useState([]);

    useEffect(() => {
        const getChats = () => {
            const ref = doc(db, "userChats", currentUser.uid);
            const unsub = onSnapshot(ref, (doc) => {
                setFriend(doc.data());
            });

            return () => unsub();
        }

        currentUser.uid && getChats();

    }, [currentUser.uid])


    return (
        <div className={styles.container}>
            {friend && Object.entries(friend)?.sort((a, b) => b[1].date - a[1].date).map((selectedFriend) => {

                const name = selectedFriend[1].userDetails.chudChatHandle;
                const nameCap = name?.charAt(0).toUpperCase() + name?.slice(1);
                return (
                    <>
                        <div
                            className={styles.currentchat}
                            key={selectedFriend[0]}
                            onClick={() => { setfoundFriend(selectedFriend[1].userDetails) }}
                        >
                            {console.log('details: ', selectedFriend[1].userDetails)}
                            <img
                                className={styles.chatimg}
                                src={selectedFriend[1]?.userDetails?.photoURL}
                                alt="avatar"
                            />
                            <div className={styles.details}>
                                <span className={styles.name}>{nameCap}</span>
                                <p className='italic'>{selectedFriend[1].lastMessage?.text}</p>
                            </div>
                        </div>
                        <hr className='mb-[1em] bg-sky-900 border-none h-[1px]' />
                    </>
                )
            })}

        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    friend: selectFriendChat
})

const mapDispatchToProps = dispatch => ({
    setfoundFriend: (friend) => dispatch(setFriendToChat(friend)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CurrentChats);