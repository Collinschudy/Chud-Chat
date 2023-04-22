

const Button = ({children, signup}) => {
    const style = {
        signup: ` mt-[1em] py-2 rounded bg-sky-900 text-white `
    }
    return (
        <button className={`${signup ? style.signup: ''}`}> {children}</button>
    )
}

export default Button;