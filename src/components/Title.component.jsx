import { BsChatHeart } from 'react-icons/bs'

const Title = () => {
    const styles = {
        title: `pl-[2em] pt-[1em] text-sky-950 font-[700] font-['Charmonman'] flex items-center text-[1.5em]`
    }
  return (
    <div className={styles.title}><BsChatHeart className='mr-[0.5em] fill-red-500'/> Chud Chat </div>
  )
}

export default Title;