import Button from "../components/button.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase/firebase.utils";


const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const style = {
        formWrapper: `h-[100vh] flex items-center justify-center bg-sky-200`,
        formContainer: `flex min-h-[20em] w-[25em] bg-white rounded-[0.5em] flex flex-col py-[1em] px-[2em]`,
        form: ` flex flex-col  overflow-hidden `,
        input: `border-b border-sky-300 mb-[0.5em] py-[0.5em] outline-none`,
        title: `text-[1.5em] text-center text-sky-900 mb-[1em] font-mono font-bold`,
        desc: ` text-center text-sky-900 text-[1.2em] font-medium mb-[1em]`,
        spansignup: `text-red-500 cursor-pointer`

    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
            navigate('/');
        }

        catch (error) {
            const errCode = error.code;
            const errMessage = error.message;
            alert(errCode, errMessage)
        }

    }
    return (
        <div className={style.formWrapper}>
            <div className={style.formContainer}>
                <div className={style.title}>Chud-Chat</div>
                <div className={style.desc}>Sign In</div>
                <form className={style.form} onSubmit={handleSubmit}>

                    <input type='email'
                        placeholder="email"
                        onChange={handleEmail}
                        className={style.input}
                    />
                    <input type='password'
                        placeholder="password"
                        onChange={handlePassword}
                        className={style.input}
                    />
                    <Button signup>Sign In</Button>

                </form>
                <div className="mt-[2em]">
                    Don't have an account? <span className={style.spansignup} onClick={() => navigate('/signup')}>sign up</span> here
                </div>

            </div>
        </div>
    );
}


export default SignIn;