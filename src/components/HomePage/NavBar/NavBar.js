import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = () => {
  const theme = localStorage.getItem('theme')
  return (
    <nav className={`${styles.navBar} ${theme === 'light' ? styles.light : ''}`}>
     <ul className={styles.menuItems}>
      <Link to="/chats"><li><i className="bi bi-envelope"></i></li></Link>
      <li className={styles.appName}>Azimigram</li>
      <li><i className="bi bi-camera"></i></li>
     </ul>
    </nav>
    )
}

export default NavBar;