import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {

  const styles = {
    container: `w-[90%] m-auto flex flex-col justfy-around mt-[1em] mb-[0.5em]`,
    inputform: `w-[100%] relative z-0`,
    input: `placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none`,
    founduser: `w-[100%] flex items-center mt-[1em]`,
    userimage: `w-[3em] h-[3em] rounded-full object-cover`,
    foundusername: `text-[1.2em] ml-[1em]`
  }
  return (
    <>
    <div className={styles.container}>
      <div className={styles.inputform}>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2 z-0">
          <AiOutlineSearch className="h-5 w-5 fill-slate-500" />
        </span>
        <input className={styles.input} type="text" placeholder='search friend to start a new chat' />
      </div>
      <div className={styles.founduser}>
        <div className={styles.imagecontainer}>
          <img className={styles.userimage} src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className={styles.foundusername}>
          <span>Anita</span>
        </div>
      </div>
    </div>
    <hr className='mb-[1em] bg-sky-900 border-none h-[1px]'/>
    </>
    
  )
}

export default Search;