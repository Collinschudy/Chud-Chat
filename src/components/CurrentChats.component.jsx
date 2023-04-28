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

    const [chats, setChats] = useState([]);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            }
        }
        currentUser.uid && getChats()

    }, [currentUser.uid])

    console.log('This:', chats)

    return (
        <div className={styles.container}>
            {chats && Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => {
                return (
                    <>
                        <div
                            className={styles.currentchat}
                            key={chat[0]}
                            onClick={() => setfoundFriend(chat[1].userDetails)}
                        >
                            {console.log('details: ', chat[1].userDetails)}
                            <img className={styles.chatimg} src={chat[1]?.userDetails?.photoURL} alt="avatar" />
                            <div className={styles.details}>
                                <span className={styles.name}>{chat[1].userDetails?.chudChatHandle}</span>
                                <p className='italic'>{chat[1].lastMessage?.text}</p>
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
    setfoundFriend: (chats) => dispatch(setFriendToChat(chats)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CurrentChats);