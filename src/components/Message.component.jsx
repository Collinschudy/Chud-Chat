import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelector';
import { selectFriendChat } from '../redux/chats/chat.selectors';
import { connect } from 'react-redux';
import { useRef } from 'react';
import { useEffect } from 'react';
const Message = ({ message, currentUser, friend }) => {
    const { text, senderId, time, photo } = message
    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }, [message])


    const styles = {
        messagecontainer: `overflow-hidden px-[1em]  flex`,
        imgcontainer: `sm:w-[3em] sm:h-[3em] rounded-full hidden sm:block`,
        image: `w-[100%] h-[100%] object-cover rounded-full`,
        img: `w-[50%] h-[12em] sm:w-[100%] h-[10em] sm:object-cover mb-[1em]`,
        messageBox1: `w-[100%] sm:min-h-[1em] sm:flex sm:justify-end`,
        messageBox2: `w-[100%] sm:min-h-[2em] sm:flex sm:justify-start`,
        imageAndTime1: `flex sm:flex-col sm:items-center sm:w-[3.8em] sm:h-[100%] sm:order-2 min-h-[1em] order-2 justify-end`,
        imageAndTime2: `flex sm:flex-col r-black sm:w-[3.8em] sm:items-center sm:h-[100%]`,
        messagecontent: ` sm:w-[30%] w-[100%] sm:min-h-[1em] sm:flex sm:justify-end flex justify-end flex-col items-end`,
        messagecontentreverse: ` sm:w-[30%] w-[100%] min-h-[1em] flex flex-col sm:justify-start flex justify-start items-start`,
        handlermessage: `bg-sky-700 text-white p-[0.4em] sm:max-w-[100%] max-w-[60%] sm:rounded-tr-[0.6em] sm:rounded-br-none sm:rounded-l-[0.6em] rounded-br-[0.6em] rounded-l-[0.6em] `,
        friendmessage: `border border-sky-200 rounded-bl-[0.6em] rounded-r-[0.6em] p-[0.4em] sm:max-w-[100%] max-w-[60%]`
    }

    // console.log('the message: ', message)
    return (
        <div className={styles.messagecontainer}>
            
            <div ref={ref} className={`${senderId === currentUser.uid ? styles.messageBox1 : styles.messageBox2}`}>

                <div className={`${senderId === currentUser.uid ? styles.imageAndTime1 : styles.imageAndTime2}`}>

                    <div className={styles.imgcontainer}>
                        <img className={styles.image} src={senderId === currentUser.uid ? currentUser.photoURL : friend.photoURL} alt="" />
                    </div>
                    <p className='text-gray-400 text-[0.8em]'>{time}</p>

                </div>

                <div className={`${senderId === currentUser.uid ? styles.messagecontent : styles.messagecontentreverse}`}>

                    <p className={`${senderId === currentUser.uid ? styles.handlermessage : styles.friendmessage} mb-[1em]`}>{text}</p>
                    {photo && <img className={styles.img} src={photo} alt="" />}
                    

                </div>
                

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    friend: selectFriendChat
})

export default connect(mapStateToProps)(Message);