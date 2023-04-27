import ChatContent from './ChatContent.component';
import TopChatBar from './TopChatBar.component';
import MessageInput from './MessageInput.component';
// import { createStructuredSelector } from 'reselect';
// import { selectFriendChat } from '../redux/chats/chat.selectors';
// import { connect } from 'react-redux';

const ChatBox = () => {
//   console.log(friend)

  const styles = {
    container: `w-[100%] flex-[0_0_auto] bg-white sm:w-[65%]`
  }
  return (
    <div className={styles.container}>
      <TopChatBar/>
      <ChatContent />
      <MessageInput />
    </div>
  )
}

// const mapStateToProps = createStructuredSelector({
//   friend: selectFriendChat
// })

// export default connect(mapStateToProps)(ChatBox);
export default ChatBox;