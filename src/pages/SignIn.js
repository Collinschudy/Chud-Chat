import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate()

    const style = {
        formWrapper: `h-[100vh] flex items-center justify-center bg-sky-200`,
        formContainer: `flex min-h-[20em] w-[25em] bg-white rounded-[0.5em] flex flex-col py-[1em] px-[2em]`,
        form: ` flex flex-col  overflow-hidden `,
        input: `border-b border-sky-300 mb-[0.5em] py-[0.5em] outline-none`,
        title: `text-[1.5em] text-center text-sky-900 mb-[1em] font-mono font-bold`,
        desc: ` text-center text-sky-900 text-[1.2em] font-medium mb-[1em]`,
        spansignup: `text-red-500 cursor-pointer`
       
    }
    return (
        <div className={style.formWrapper}>
            <div className={style.formContainer}>
                <div className={style.title}>Chud-Chat</div>
                <div className={style.desc}>Sign In</div>
                <form className={style.form}>
                    
                    <input type='email' placeholder="email" className={style.input}/>
                    <input type='password' placeholder="password" className={style.input}/>
                    <Button signup>Sign In</Button>
                    
                </form>
                <div>Don't have an account? <span className={style.spansignup} onClick={() => navigate('/signup')}>sign up</span> here</div>
                
            </div>
        </div>
    );
}


export default SignIn;