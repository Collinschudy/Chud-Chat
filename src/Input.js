
const FormInput = ({placeholder, file}) => {
    const style = {
        file: `bg-red-400`
    }
    return (
      <input className={`${file ? style.file : ''}`}
        placeholder= {placeholder}
      /> 
    )
}

export default FormInput;