import styles from '../../HomePage/NavBar/NavBar.module.css'
const SearchBox = () => {
  const theme = localStorage.getItem('theme')
  return (
    <nav className={`${styles.navBar} ${theme === 'light' ? styles.light : ''}`}>
     <div className={styles.menuItems}>
      <input
       type="text"
       name="search"
       placeholder="Search" />
       
      <i className="bi bi-search"></i>
     </div>
    </nav>
    )
}

export default SearchBox;