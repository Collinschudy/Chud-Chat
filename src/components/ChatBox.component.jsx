import ChatContent from './ChatContent.component';
import TopChatBar from './TopChatBar.component';
import MessageInput from './MessageInput.component';


const ChatBox = () => {


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


export default ChatBox;