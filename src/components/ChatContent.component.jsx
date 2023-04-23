import Message from './Message.component';

const ChatContent = () => {

  const styles = {
    container: `h-[calc(100%-8em)] overflow-scroll`
  }
  return (
    <div className={styles.container}>
      <Message handler/>
      <Message handler/>
      <Message />
      <Message handler/>
      <Message handler/>
      <Message handler/>
    </div>
  )
}

export default ChatContent;