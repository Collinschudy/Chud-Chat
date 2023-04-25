import imagee from '../assets/currentchat.jpg';
const Message = ({handler}) => {

    const styles = {
        container: `overflow-hidden px-[1em] py-[1em]`,
        wrapper: `flex justify-start`,
        reverse: `flex flex-row-reverse`,
        userinfo: `w-[6em] sm:w-[3.5em]`,
        imgcontainer: `w-[3em] h-[3em] rounded-full`,
        image: `w-[100%] h-[100%] object-cover rounded-full`,
        messagecontent: `flex flex-col justify-center items-end`,
        contentreverse: `flex items-start justify-center flex-col`,
        message: `ml-[1em] bg-gray-100 flex items-center justify-start px-[1em] py-[1em] rounded-bl-[1em] rounded-r-[1em] border border-sky-200`,
        handler: `bg-sky-700 rounded-l-[1em] rounded-br-[1em] text-white py-[1em] px-[1em] justify-start mr-[1em] items-center`,
        img: `w-[40%]`
    }
    return (
        <div className={styles.container}>
            <div className={`${styles.wrapper} ${handler ? styles.reverse: ''}`}>
                <div className={styles.userinfo}>
                    <div className={styles.imgcontainer}>
                        <img className={styles.image} src={imagee} alt="" />
                    </div>
                    <span className='text-gray-400 text-[0.8em]'>Just now</span>
                </div>
                <div className={`${handler ? styles.messagecontent : styles.contentreverse}`}>
                    <p className={`${handler ? styles.handler : styles.message} mb-[3em]`}>Hello my brother</p>
                    <img className={styles.img} src={imagee} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Message;