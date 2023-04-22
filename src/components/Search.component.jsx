import React from 'react'

const Search = () => {

  const styles = {
    container: `w-[90%] m-auto`,
    inputform: ``,
    input: ``,
    founduser: ``
  }
  return (
    <div className={styles.container}>
      <div className={styles.inputform}>
        <input className={styles.input} type="text" placeholder='search friend'/>
      </div>
      <div className={styles.founduser}>
        <div className={styles.imagecontainer}>
          <img src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Search;