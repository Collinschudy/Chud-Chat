import ChatBox from "../components/ChatBox.component";
import Sidebar from '../components/Sidebar.component';

const HomePage = () => {
    const styles = {
        pageWrapper: `h-[100vh] w-[100%] flex items-center justify-center sm:w-[100%] sm:border sm:border-[10px] sm:border-sky-900 bg-gray-200`,
        contentsContainer: `sm:border sm:border-none sm:h-[40em] sm:w-[80em] sm:rounded-xl overflow-hidden border border-red-500 h-[20em] w-[60rem] flex`
    }
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.contentsContainer}>
                <Sidebar />
                <ChatBox />
            </div>
             
        </div>
    )
}

export default HomePage;