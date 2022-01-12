import styles from '../HomePage/NavBar/NavBar.module.css'
const NavBar = () => {
  const theme = localStorage.getItem('theme')
  return(
    <nav className={`${styles.navBar} ${theme === 'light' ? styles.light : ''}`}>
     <ul className={styles.menuName}>
      <li className={styles.appName}>Activity</li>
     </ul>
    </nav>
    )
}

export default NavBar;