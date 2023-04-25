import ChatBox from "../components/ChatBox.component";
import Sidebar from '../components/Sidebar.component';

const HomePage = () => {
    const styles = {
        pageWrapper: ` sm:w-[100%] h-[100%] w-[100%] overflow-y-hidden box-border flex items-center justify-center sm:h-[100vh] sm:border sm:border-[10px] sm:border-sky-900 bg-gray-200 overflow-x-scroll sm:overflow-x-hidden`,
        contentsContainer: `sm:shadow-xl sm:border sm:border-none sm:h-[44em] sm:w-[90em] sm:rounded-xl h-[100vh] w-[100%] flex`
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