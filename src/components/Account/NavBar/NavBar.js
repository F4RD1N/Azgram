import styles from '../../HomePage/NavBar/NavBar.module.css'
const NavBar = ({username, themeHandler}) => {
  const theme = localStorage.getItem('theme')
  return (
    <nav className={`${styles.navBar} ${theme === 'light' ? styles.light : ''}`}>
     <ul className={styles.menuItems}>
      <li><i className="bi bi-list"></i></li>
      <li className={styles.appName}>{username}</li>
      <li onClick={themeHandler}>
       { theme === 'dark' ? <i className="bi bi-brightness-high"></i>
         : <i className="bi bi-moon"></i>
       }
      </li>
     </ul>
    </nav>
    )
}

export default NavBar;