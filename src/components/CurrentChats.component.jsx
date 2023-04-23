import React from 'react';
import image from '../assets/currentchat.jpg'

const CurrentChats = () => {

    const styles = {
        container: `w-[90%] m-auto`,
        currentchat: `flex items-center mb-[0.5em]`,
        chatimg: `w-[3.5em] h-[3.5em] rounded-full object-cover`,
        details: `ml-[1em]`,
        name: `text-[1.5em]`
    }
    return (
        <div className={styles.container}>
            <div className={styles.currentchat}>
                <img className={styles.chatimg} src={image} alt="" />
                <div className={styles.details}>
                    <span className={styles.name}>Ebube</span>
                    <p className='italic'>Hello bro</p>
                </div>
            </div>
            <hr className='mb-[1em] bg-sky-900 border-none h-[1px]'/>
            <div className={styles.currentchat}>
                <img className={styles.chatimg} src={image} alt="" />
                <div className={styles.details}>
                    <span className={styles.name}>Ebube</span>
                    <p>Hello bro</p>
                </div>
            </div>
            <hr className='mb-[1em] bg-sky-900 border-none h-[1px]'/>
            <div className={styles.currentchat}>
                <img className={styles.chatimg} src={image} alt="" />
                <div className={styles.details}>
                    <span className={styles.name}>Ebube</span>
                    <p>Hello bro</p>
                </div>
            </div>
            <hr className='mb-[1em] bg-sky-900 border-none h-[1px]'/>
        </div>
    )
}

export default CurrentChats