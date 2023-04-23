import { BsFillSendFill } from 'react-icons/bs';
import { RiImageFill } from 'react-icons/ri';

const MessageInput = () => {

  const styles = {
    container: `h-[4em] bg-slate-100 border-t border-sky-300`,
    wrapper: `flex items-center justify-between w-[96%] h-[100%] m-auto`,
    inputcontainer: `h-[100%] flex items-center w-[90%]`,
    input: `placeholder:italic w-full focus:outline-none h-[80%]`
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RiImageFill />
        <div className={styles.inputcontainer}>
          <input className={styles.input} type="text" placeholder='Type your message' />
        </div>
        <BsFillSendFill />
      </div>

    </div>
  )
}

export default MessageInput;